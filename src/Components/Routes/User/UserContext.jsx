import { createContext, useState, useEffect } from "react";
import { auth, db } from "../../FireBase/FireBase";
import { onAuthStateChanged } from "firebase/auth";
import {
  doc,
  setDoc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [savedEvents, setSavedEvents] = useState([]); // wishlist
  const [joinedEvents, setJoinedEvents] = useState([]); // joined

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        loadUserEvents(firebaseUser.uid);
      } else {
        setUser(null);
        setSavedEvents([]);
        setJoinedEvents([]);
      }
    });

    return () => unsubcribe();
  }, []);

  const loadUserEvents = async (userId) => {
    try {
      const userDocRef = doc(db, "users", userId);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        setSavedEvents(userData.savedEvents || []);
        setJoinedEvents(userData.joinedEvents || []);

        // Backup to localStorage
        localStorage.setItem(`savedEvents_${userId}`, JSON.stringify(userData.savedEvents || []));
        localStorage.setItem(`joinedEvents_${userId}`, JSON.stringify(userData.joinedEvents || []));
      } else {
        // fallback localStorage
        const localSaved = localStorage.getItem(`savedEvents_${userId}`);
        const localJoined = localStorage.getItem(`joinedEvents_${userId}`);

        setSavedEvents(localSaved ? JSON.parse(localSaved) : []);
        setJoinedEvents(localJoined ? JSON.parse(localJoined) : []);
      }
    } catch (error) {
      // fallback localStorage on error
      const localSaved = localStorage.getItem(`savedEvents_${userId}`);
      const localJoined = localStorage.getItem(`joinedEvents_${userId}`);

      setSavedEvents(localSaved ? JSON.parse(localSaved) : []);
      setJoinedEvents(localJoined ? JSON.parse(localJoined) : []);
    }
  };

  // Save Event (Wishlist)
  const saveEvent = async (eventData) => {
    if (!user) return false;

    if (savedEvents.some(e => e.id === eventData.id)) return false;

    const updatedSaved = [...savedEvents, eventData];
    setSavedEvents(updatedSaved);
    localStorage.setItem(`savedEvents_${user.uid}`, JSON.stringify(updatedSaved));

    // Save to Firebase
    try {
      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, { savedEvents: updatedSaved }, { merge: true });
    } catch (error) {
      console.error("Firebase saveEvent failed", error);
    }

    return true;
  };

  const removeSavedEvent = async (eventId) => {
    if (!user) return false;

    const updatedSaved = savedEvents.filter(e => e.id !== eventId);
    setSavedEvents(updatedSaved);
    localStorage.setItem(`savedEvents_${user.uid}`, JSON.stringify(updatedSaved));

    // Save to Firebase
    try {
      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, { savedEvents: updatedSaved }, { merge: true });
    } catch (error) {
      console.error("Firebase removeSavedEvent failed", error);
    }

    return true;
  };

  // Join Event (real joining)
  const joinEvent = async (eventData) => {
    if (!user) return false;

    if (joinedEvents.some(e => e.id === eventData.id)) return false;

    const updatedJoined = [...joinedEvents, eventData];
    setJoinedEvents(updatedJoined);
    localStorage.setItem(`joinedEvents_${user.uid}`, JSON.stringify(updatedJoined));

    // Save to Firebase
    try {
      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, { joinedEvents: updatedJoined }, { merge: true });
    } catch (error) {
      console.error("Firebase joinEvent failed", error);
    }

    return true;
  };

  const leaveEvent = async (eventId) => {
    if (!user) return false;

    const updatedJoined = joinedEvents.filter(e => e.id !== eventId);
    setJoinedEvents(updatedJoined);
    localStorage.setItem(`joinedEvents_${user.uid}`, JSON.stringify(updatedJoined));

    // Save to Firebase
    try {
      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, { joinedEvents: updatedJoined }, { merge: true });
    } catch (error) {
      console.error("Firebase leaveEvent failed", error);
    }

    return true;
  };

  return (
    <UserContext.Provider value={{
      user,
      savedEvents,
      joinEvent,
      joinedEvents,
      leaveEvent,
      saveEvent,
      removeSavedEvent,
    }}>
      {children}
    </UserContext.Provider>
  );
}


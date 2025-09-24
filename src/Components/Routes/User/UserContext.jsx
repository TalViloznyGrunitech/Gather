import { createContext, useState, useEffect } from "react";
import { auth, db } from "../../FireBase/FireBase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, getDoc, collection, query, where, getDocs } from "firebase/firestore";


export const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [joinedEvents, setJoinedEvents] = useState([]);

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                setUser(firebaseUser);
                loadJoinedEvents(firebaseUser.uid);
            } else {
                setUser(null);
                setJoinedEvents([]);
            }
        });

        return () => unsubcribe();
    }, []); 

    const loadJoinedEvents = async (userId) => {
        try {
            console.log("Loading joined events for user:", userId);
            
            // Try Firebase first
            const userDocRef = doc(db, "users", userId);
            const userDoc = await getDoc(userDocRef);
            
            if (userDoc.exists()) {
                const userData = userDoc.data();
                console.log("User data from Firebase:", userData);
                const events = userData.joinedEvents || [];
                console.log("Loaded joined events from Firebase:", events);
                setJoinedEvents(events);
                
                // Also save to localStorage as backup
                localStorage.setItem(`joinedEvents_${userId}`, JSON.stringify(events));
            } else {
                console.log("No Firebase document found, checking localStorage");
                // Fallback to localStorage
                const localEvents = localStorage.getItem(`joinedEvents_${userId}`);
                if (localEvents) {
                    const events = JSON.parse(localEvents);
                    console.log("Loaded joined events from localStorage:", events);
                    setJoinedEvents(events);
                } else {
                    console.log("No events found in localStorage either");
                    setJoinedEvents([]);
                }
            }
        } catch (error) {
            console.error("Error loading joined events from Firebase:", error);
            console.log("Falling back to localStorage");
            
            // Fallback to localStorage
            try {
                const localEvents = localStorage.getItem(`joinedEvents_${userId}`);
                if (localEvents) {
                    const events = JSON.parse(localEvents);
                    console.log("Loaded joined events from localStorage fallback:", events);
                    setJoinedEvents(events);
                } else {
                    setJoinedEvents([]);
                }
            } catch (localError) {
                console.error("Error loading from localStorage:", localError);
                setJoinedEvents([]);
            }
        }
    };

    const joinEvent = async (eventData) => {
        if (!user) return false;
        
        try {
            const userId = user.uid;
            
            // Check if event is already joined
            if (joinedEvents.some(event => event.id === eventData.id)) {
                console.log("Event already joined:", eventData.id);
                return false; // Already joined
            }
            
            const updatedEvents = [...joinedEvents, eventData];
            console.log("Saving joined events:", updatedEvents);
            
            // Update local state immediately
            setJoinedEvents(updatedEvents);
            
            // Save to localStorage immediately (always works)
            localStorage.setItem(`joinedEvents_${userId}`, JSON.stringify(updatedEvents));
            console.log("Saved to localStorage");
            
            // Try to save to Firebase
            try {
                const userDocRef = doc(db, "users", userId);
                await setDoc(userDocRef, {
                    joinedEvents: updatedEvents,
                    userId: userId,
                    lastUpdated: new Date().toISOString()
                }, { merge: true });
                console.log("✅ Successfully saved to Firebase");
            } catch (firebaseError) {
                console.error("❌ Firebase save failed:", firebaseError);
                console.log("Data saved to localStorage instead");
            }
            
            return true;
        } catch (error) {
            console.error("Error joining event:", error);
            return false;
        }
    };

    const leaveEvent = async (eventId) => {
        if (!user) return false;
        
        try {
            const userId = user.uid;
            
            const updatedEvents = joinedEvents.filter(event => event.id !== eventId);
            console.log("Removing event:", eventId);
            console.log("Updated events after removal:", updatedEvents);
            
            // Update local state immediately
            setJoinedEvents(updatedEvents);
            
            // Save to localStorage immediately (always works)
            localStorage.setItem(`joinedEvents_${userId}`, JSON.stringify(updatedEvents));
            console.log("Removed from localStorage");
            
            // Try to save to Firebase
            try {
                const userDocRef = doc(db, "users", userId);
                await setDoc(userDocRef, {
                    joinedEvents: updatedEvents,
                    userId: userId,
                    lastUpdated: new Date().toISOString()
                }, { merge: true });
                console.log("✅ Successfully removed from Firebase");
            } catch (firebaseError) {
                console.error("❌ Firebase remove failed:", firebaseError);
                console.log("Data removed from localStorage instead");
            }
            
            return true;
        } catch (error) {
            console.error("Error leaving event:", error);
            return false;
        }
    };

    return (
        <UserContext.Provider value={{ 
            user, 
            joinedEvents, 
            joinEvent, 
            leaveEvent 
        }}>
            {children}
        </UserContext.Provider>
    ); 

}


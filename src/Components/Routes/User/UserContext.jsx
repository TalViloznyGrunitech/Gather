import { createContext, useState, useEffect } from "react";
import { auth } from "../../FireBase/FireBase";
import { onAuthStateChanged } from "firebase/auth";
import { getUserUpcomingEvents, addEventToUser, removeEventFromUser } from "../../FireBase/userEvents";


export const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [userEvents, setUserEvents] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                setUser(firebaseUser);
                loadUserEvents(firebaseUser.uid);
            } else {
                setUser(null);
                setUserEvents([]);
            }
        });

        return () => unsubcribe();
    }, []);

    const loadUserEvents = async (userId) => {
        setLoading(true);
        try {
            const result = await getUserUpcomingEvents(userId);
            if (result.success) {
                setUserEvents(result.events);
            }
        } catch (error) {
            console.error("Error loading user events:", error);
        } finally {
            setLoading(false);
        }
    };

    const addEvent = async (eventData) => {
        if (!user) return { success: false, error: "User not signed in" };

        setLoading(true);
        try {
            const result = await addEventToUser(user.uid, eventData);
            if (result.success) {
                await loadUserEvents(user.uid); // Reload events
            }
            return result;
        } catch (error) {
            console.error("Error adding event:", error);
            return { success: false, error: error.message };
        } finally {
            setLoading(false);
        }
    };

    const removeEvent = async (eventId) => {
        if (!user) return { success: false, error: "User not signed in" };

        setLoading(true);
        try {
            const result = await removeEventFromUser(eventId);
            if (result.success) {
                await loadUserEvents(user.uid); // Reload events
            }
            return result;
        } catch (error) {
            console.error("Error removing event:", error);
            return { success: false, error: error.message };
        } finally {
            setLoading(false);
        }
    };

    return (
        <UserContext.Provider value={{
            user,
            userEvents,
            loading,
            addEvent,
            removeEvent,
            loadUserEvents
        }}>
            {children}
        </UserContext.Provider>
    );
}


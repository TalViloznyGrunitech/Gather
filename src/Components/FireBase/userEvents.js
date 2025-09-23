import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
  deleteDoc,
  doc
} from "firebase/firestore";
import { db } from "./FireBase";

// Add an event to user's upcoming events
export const addEventToUser = async (userId, eventData) => {
  try {
    console.log("Adding event for user:", userId);
    console.log("Event data:", eventData);

    const userEventsRef = collection(db, "userEvents");

    // Filter out undefined values to prevent Firebase errors
    const cleanEventData = Object.fromEntries(
      Object.entries(eventData).filter(([_, value]) => value !== undefined)
    );

    // Handle date conversion safely
    let eventDate = new Date();
    if (eventData.dateTimeLabel) {
      const parsedDate = new Date(eventData.dateTimeLabel);
      // Check if the date is valid
      if (!isNaN(parsedDate.getTime())) {
        eventDate = parsedDate;
      }
    }

    const eventWithTimestamp = {
      ...cleanEventData,
      userId: userId,
      addedAt: new Date(),
      eventDate: eventDate // Use the safely parsed date
    };

    console.log("Saving to Firestore:", eventWithTimestamp);
    const docRef = await addDoc(userEventsRef, eventWithTimestamp);
    console.log("Successfully saved with ID:", docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error adding event to user:", error);
    console.error("Error details:", error.code, error.message);
    return { success: false, error: error.message };
  }
};

// Get all upcoming events for a specific user
export const getUserUpcomingEvents = async (userId) => {
  try {
    const userEventsRef = collection(db, "userEvents");
    const q = query(
      userEventsRef,
      where("userId", "==", userId),
      orderBy("eventDate", "asc")
    );
    const querySnapshot = await getDocs(q);
    const events = querySnapshot.docs.map((doc) => ({
      id: doc.id, // Firebase document ID
      ...doc.data(),
    }));
    return { success: true, events };
  } catch (error) {
    console.error("Error getting user upcoming events:", error);
    return { success: false, error: error.message, events: [] };
  }
};

// Remove an event from user's upcoming events
export const removeEventFromUser = async (eventId) => {
  try {
    await deleteDoc(doc(db, "userEvents", eventId));
    return { success: true };
  } catch (error) {
    console.error("Error removing event from user:", error);
    return { success: false, error: error.message };
  }
};

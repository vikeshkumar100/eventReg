import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";

// Firebase configuration object
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase app and Firestore
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

// Fetch all registered users
export const fetchRegisteredUsers = async () => {
  try {
    const usersCollection = collection(firestore, "userRegistrations");
    const userSnapshot = await getDocs(usersCollection);
    return userSnapshot.docs.map(doc => doc.data());
  } catch (error) {
    console.error("Error fetching registered users:", error);
    return [];
  }
};

// Fetch all events
export const fetchEvents = async () => {
  try {
    const querySnapshot = await getDocs(collection(firestore, 'events'));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};

// Register a user for an event
export const registerForEvent = async (userData) => {
  try {
    // Add user data to the "userRegistrations" collection
    const registrationCollection = collection(firestore, "userRegistrations");
    await addDoc(registrationCollection, userData);
    console.log("Registration successful");
  } catch (error) {
    console.error("Error registering for event:", error);
  }
};

// Add a new event
export const addEvent = async (event) => {
  try {
    const eventsCollection = collection(firestore, "events");
    const docRef = await addDoc(eventsCollection, event);
    return docRef;
  } catch (error) {
    console.error("Error adding event:", error);
  }
};

// Delete an event
export const deleteEvent = async (id) => {
  try {
    const eventDoc = doc(firestore, "events", id);
    await deleteDoc(eventDoc);
  } catch (error) {
    console.error("Error deleting event:", error);
  }
};

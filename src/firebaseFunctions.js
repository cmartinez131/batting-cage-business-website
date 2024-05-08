import { db } from './firebase'; // Adjust the path as necessary
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export async function createBooking(userId, cageId, date, time) {
    try {
        const docRef = await addDoc(collection(db, "Bookings"), {
            userId: userId,
            cageId: cageId,
            date: date,
            time: time,
            createdAt: serverTimestamp() // Captures the exact time the booking was created
        });
        console.log("Booking created with ID: ", docRef.id);
        return docRef.id; // Returns the ID of the new booking document
    } catch (e) {
        console.error("Error adding document: ", e);
        throw new Error("Booking could not be created.");
    }
}

import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Book.css';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { createBooking } from '../firebaseFunctions';

const Book = ({ user }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTimes, setSelectedTimes] = useState(new Set());
    const [cagesAvailability, setCagesAvailability] = useState({});
    const pricePerSlot = 35; // price per 30-minute slot
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchCageAvailability = async () => {
            const cageRef = doc(db, "Cages", "Cage1"); // Fetch details for 'Cage1'
            const docSnap = await getDoc(cageRef);

            if (docSnap.exists()) {
                setCagesAvailability(docSnap.data().timeSlots);
            } else {
                console.log("No such document!");
                setCagesAvailability({});
            }
        };

        fetchCageAvailability();
    }, [selectedDate]);

    const toggleTimeSlot = (time, available) => {
        if (!available) {
            return; // if no cages are available, don't allow selection
        }

        const newTimes = new Set(selectedTimes);
        if (newTimes.has(time)) {
            newTimes.delete(time);
        } else {
            newTimes.add(time);
        }
        setSelectedTimes(newTimes);
    };

    const timeToMinutes = (time) => {
        const [hourMinute, period] = time.split(' ');
        let [hours, minutes] = hourMinute.split(':').map(Number);

        if (period === 'PM' && hours !== 12) hours += 12;
        if (period === 'AM' && hours === 12) hours = 0;

        return hours * 60 + minutes;
    };

    const formatCageAvailability = (available) => {
        if (!available) return 'Unavailable';
        return "Cage available";
    };

    const calculateTotalPrice = () => {
        return selectedTimes.size * pricePerSlot;
    };

    const calculateTotalHours = () => {
        return selectedTimes.size * 0.5; // Each slot is 0.5 hours
    };

    const renderReservationList = () => {
        const sortedTimes = Array.from(selectedTimes).sort();
        return sortedTimes.map(time => {
            const endTime = getEndTime(time);
            return (
                <div key={time} className="reservation-item">
                    <span>{selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</span>
                    <span>{`${time} - ${endTime}`}</span>
                    <span>${pricePerSlot.toFixed(2)}</span>
                </div>
            );
        });
    };

    const getEndTime = (startTime) => {
        const [hours, minutesPart] = startTime.split(':');
        const minutes = minutesPart.substring(0, 2);
        const ampm = minutesPart.substring(3);

        let date = new Date(0, 0, 0, hours, minutes);
        date.setMinutes(date.getMinutes() + 30); // Add 30 minutes

        let newHours = date.getHours();
        let newMinutes = date.getMinutes();
        let newAmpm = ampm;

        if (newHours >= 12) {
            newHours -= 12;
            newAmpm = 'PM';
        }
        if (newHours === 0) newHours = 12; // handle midnight
        if (newMinutes < 10) newMinutes = '0' + newMinutes; // adding leading zero

        return `${newHours}:${newMinutes} ${newAmpm}`;
    };

    const handleCheckout = async () => {
        if (!user) {
            setMessage('You must be logged in to book.');
            return;
        }
        let successMessages = [];
        for (let time of selectedTimes) {
            if (cagesAvailability[time]) { // Assuming availability is a count
                try {
                    await createBooking(user.uid, "Cage1", selectedDate.toISOString().split('T')[0], time);
                    successMessages.push(`Booking successful for ${time}`);
                } catch (error) {
                    console.error('Booking failed:', error);
                    setMessage(`Booking failed for ${time}: ${error.message}`);
                    return;
                }
            }
        }
        setMessage(successMessages.join(', ')); // Join all success messages into a single string
    };

    return (
        <div className="booking-container">
            <div className="booking-title-container">
                <h1>Book a Cage</h1>
            </div>
            <div className="date-picker">
                <DatePicker
                    selected={selectedDate}
                    onChange={date => setSelectedDate(date)}
                    inline
                />
            </div>
            <div className="time-slot-container">
                {Object.entries(cagesAvailability)
                    .sort((a, b) => timeToMinutes(a[0]) - timeToMinutes(b[0]))
                    .map(([time, available], index) => (
                        <div key={index} className={`time-slot ${selectedTimes.has(time) ? 'selected' : ''} ${!available ? 'unavailable' : ''}`} onClick={() => toggleTimeSlot(time, available)}>
                            {time} - {formatCageAvailability(available)}
                        </div>
                    ))}
            </div>
            <div className="cart">
                <h2>Your Reservation</h2>
                <div className="reservation-list">
                    {selectedTimes.size > 0 ? renderReservationList() : <p className="reservation-item">No time slots selected.</p>}
                </div>
                <div className="total-price">
                    <p>Total:</p>
                    <p>{calculateTotalHours()} hrs / ${calculateTotalPrice().toFixed(2)}</p>
                </div>
                <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
                {message && <p className="message">{message}</p>}
            </div>
        </div>
    );
};

export default Book;

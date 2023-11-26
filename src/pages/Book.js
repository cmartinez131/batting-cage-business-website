import React, { useState, useEffect } from 'react';
import './Book.css';

const Book = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [dates, setDates] = useState([]);
    const [selectedTimes, setSelectedTimes] = useState(new Set());
    const pricePerSlot = 35; // price per 30-minute slot

    const cagesAvailability = {
        '9:00 AM': 2,
        '9:30 AM': 3,
        '10:00 AM': 0,
        '10:30 AM': 0,
        '11:00 AM': 2,
        '12:30 AM': 1,
        '1:00 PM': 2,
        '1:30 PM': 3,
        '2:00 PM': 3,
        '2:30 PM': 3,
        '3:00 PM': 3,
        '3:30 PM': 3,
        '4:00 PM': 3,
        '4:30 PM': 1,
        '5:00 PM': 2,
        '5:30 PM': 1,
        '6:00 PM': 2,
        '6:30 PM': 1,
        '7:00 PM': 0,
        '7:30 PM': 0,
        '8:00 PM': 0,
        '8:30 PM': 0,
        '9:00 PM': 2,
        '9:30 PM': 2,
        '10:00 PM': 3,
        '10:30 PM': 3,
        '11:00 PM': 3,

        // add additional time slots
    };

    // populate the dates for the next two weeks
    useEffect(() => {
        let tempDates = [];
        for (let i = 0; i < 14; i++) {
            let newDate = new Date();
            newDate.setDate(newDate.getDate() + i);
            tempDates.push(newDate);
        }
        setDates(tempDates);
    }, []);

    const toggleTimeSlot = (time) => {
        if (cagesAvailability[time] === 0) {
            // if no cages are available, don't allow selection
            return;
        }

        const newTimes = new Set(selectedTimes);
        if (newTimes.has(time)) {
            newTimes.delete(time);
        } else {
            newTimes.add(time);
        }
        setSelectedTimes(newTimes);
    };

    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    };

    const formatCageAvailability = (numCages) => {
        if (numCages === 0) return 'Unavailable';
        return `${numCages} cage${numCages > 1 ? 's' : ''} available`;
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
                    <span>{formatDate(selectedDate)}</span>
                    <span>{`${time} - ${endTime}`}</span>
                    <span>${pricePerSlot.toFixed(2)}</span>
                </div>
            );
        });
    };

    // helper function to get end time of a slot
    const getEndTime = (startTime) => {
        const [hours, minutesPart] = startTime.split(':');
        const minutes = minutesPart.substring(0, 2);
        const ampm = minutesPart.substring(2);

        let date = new Date(0, 0, 0, hours, minutes);
        date.setMinutes(date.getMinutes() + 30); // Add 30 minutes

        let newHours = date.getHours();
        let newMinutes = date.getMinutes();
        let newAmpm = ampm;
        
        // convert to 12-hour format
        if (newHours >= 12) {
            newHours -= 12;
            newAmpm = 'PM';
        }
        if (newHours === 0) newHours = 12; // handle midnight
        if (newMinutes < 10) newMinutes = '0' + newMinutes; // adding leading zero

        return `${newHours}:${newMinutes} ${newAmpm}`;
    };

    return (
        <div className="booking-container">
            <div className="booking-title-container">
                <h1>Book a table</h1>
            </div>
            <div className="date-picker">
                {dates.map((date, index) => (
                    <div key={index} className={`date ${date.toDateString() === selectedDate.toDateString() ? 'selected' : ''}`} onClick={() => setSelectedDate(date)}>
                        {formatDate(date)}
                    </div>
                ))}
            </div>
            <div className="time-slot-container">
                {Object.entries(cagesAvailability).map(([time, numCages], index) => (
                    <div key={index} className={`time-slot ${selectedTimes.has(time) ? 'selected' : ''} ${numCages === 0 ? 'unavailable' : ''}`} onClick={() => toggleTimeSlot(time)}>
                        {time} - {formatCageAvailability(numCages)}
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
                <button className="checkout-button">Checkout</button>
            </div>
        </div>
    );
};

export default Book;

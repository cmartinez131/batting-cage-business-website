import React from 'react';
import './Locations.css';
import logo from '../assets/logo.png';

const Map = ({ address, name }) => {
    const googleMapsSrc = `https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(address)}`;
    return (
        <iframe
            title={`${name} Map`}
            width="600"
            height="450"
            style={{ border: "0" }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={googleMapsSrc}
        />
    );
};

const Locations = () => {
    const locations = [
        {
            name: "Astoria, NY",
            address: "32-87 Steinway St",
            hours: [
                "Mon - Thurs: 7 AM - 8 PM",
                "Fri: 7 AM - 10 PM",
                "Sat: 9 AM - 5 PM",
                "Sun: Closed"
            ],
            email: "info@battingblvd.com",
            phone: "123-456-7890",
            subway: ["R to Steinway St", "J to Jay street"],
            parking: "Street parking only."
        },
        {
            name: "Downtown Brooklyn, NY",
            address: "622 Fulton, Brooklyn",
            hours: [
                "Mon - Thurs: 8 AM - 9 PM",
                "Fri - Sat: 8 AM - 11 PM",
                "Sun: 9 AM - 6 PM"
            ],
            email: "info@battingblvd.com",
            phone: "098-765-4321",
            subway: ["J to Jay street"],
            parking: "Street parking only."
        },
        {
            name: "Long Island, NY",
            address: '40.778236,-73.777908',
            coordinates: '40.778236,-73.777908',
            hours: [
                "Mon - Fri: 8 AM - 10 PM",
                "Sat: 9 AM - 8 PM",
                "Sun: 10 AM - 6 PM"
            ],
            email: "longisland@battingblvd.com",
            phone: "234-567-8901",
            train: ["25 min walk from Bayside LIRR stop"],
            buses: ["N20G to Great Neck", "N21 to Glen Cove", "N23 to Manorhaven"],
            parking: "Parking on premises."
        }
    ];

    return (
        <div className="locations-container">
            <div className="logo-and-title-container">
                <img src={logo} alt="Business logo" className="business-logo" />
                <h1 className="page-title">Locations</h1>
            </div>
            {locations.map((loc, index) => (
                <div key={index}>
                    <h2 className="locations-title">{loc.name}</h2>
                    <div className="locations-row">
                        <div className="locations-col">
                            <Map address={loc.address} name={loc.name} />
                        </div>
                        <div className="locations-col">
                            <div className="locations-details">
                                <h3>{loc.name}</h3>
                                <p>{loc.address}</p>
                                <h3>Hours</h3>
                                <ul>
                                    {loc.hours.map((hour, index) => (
                                        <li key={index}>{hour}</li>
                                    ))}
                                </ul>
                                {loc.subway && loc.subway.length > 0 && (
                                    <>
                                        <h3>Subway Stops</h3>
                                        <ul>
                                            {loc.subway.map((stop, index) => (
                                                <li key={index}>{stop}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                                {loc.train && (
                                    <>
                                        <h3>Train Stops</h3>
                                        <ul>
                                            {loc.train.map((trainStop, index) => (
                                                <li key={index}>{trainStop}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                                {loc.buses && loc.buses.length > 0 && (
                                    <>
                                        <h3>Bus Stops</h3>
                                        <ul>
                                            {loc.buses.map((bus, index) => (
                                                <li key={index}>{bus}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                                <h3>Parking</h3>
                                <p>{loc.parking}</p>
                                <div className="contact-info">
                                    <h3>Contact Information</h3>
                                    <p>{loc.phone}</p>
                                    {loc.email && <p>{loc.email}</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Locations;

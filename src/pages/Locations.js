import coverImage from '../assets/home-cover.png';
import './Locations.css';
import logo from '../assets/logo.png';


const Map = ({ address, name }) => {
    const googleMapsSrc = `https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(address)}`;
    return (
        <iframe
            title={`${name} Map`} // Unique title for each map based on location name
            width="600"
            height="450"
            style={{ border: "0" }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={googleMapsSrc}>
        </iframe>
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
        },
        // {
        //     name: "Los Angeles, CA",
        //     address: "WHollywood Blvd 12530",
        //     hours: "Mon - Thurs: 8 AM - 9 PM, Fri - Sat: 8 AM - 11 PM, Sun: 9 AM - 6 PM",
        //     email: "info@williamsburgspot.com",
        //     phone: "098-765-4321",
        //     subway: "L to Bedford Ave"
        //   },
        // ...additional locations
    ];

    return (
        <div className="locations-container">
            {/* <div className="row">
                <img src={coverImage} alt="Cover" />
            </div> */}
            <div className="logo-and-title-container">
                <img src={logo} alt="Business logo" className="business-logo" />
                <h1 className="page-title">Locations</h1>
            </div>
            {locations.map((loc, index) => (
                <div className="locations-row" key={index}>
                    <div className="locations-col">
                        <Map address={loc.address} name={loc.name} />
                    </div>
                    <div className="locations-col">
                        <div className="locations-details">
                            <h2>{loc.name}</h2>
                            {/* <h2>Address</h2> */}
                            <p>{loc.address}</p>
                            <h2>Hours</h2>
                            <ul>
                                {loc.hours.map((hour, index) => (
                                    <li key={index}>{hour}</li>
                                ))}
                            </ul>
                            {loc.subway && loc.subway.length > 0 && (
                                <>
                                    <h2>Subway Stops</h2>
                                    <ul>
                                        {loc.subway.map((stop, index) => (
                                            <li key={index}>{stop}</li>
                                        ))}
                                    </ul>
                                </>
                            )}
                            {loc.train && (
                                <>
                                    <h2>Train Stops</h2>
                                    <ul>
                                        {loc.train.map((trainStop, index) => (
                                            <li key={index}>{trainStop}</li>
                                        ))}
                                    </ul>
                                </>
                            )}
                            {loc.buses && loc.buses.length > 0 && (
                                <>
                                    <h2>Bus Stops</h2>
                                    <ul>
                                        {loc.buses.map((bus, index) => (
                                            <li key={index}>{bus}</li>
                                        ))}
                                    </ul>
                                </>
                            )}
                            <h2>Parking</h2>
                            <p>{loc.parking}</p>
                            <div className="contact-info">
                                <h2>Contact Information</h2>
                                <p>{loc.phone}</p>
                                {loc.email && <p>{loc.email}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            ))}



            {/* <div className="row">
                <div className="col col-wider">
                    <Map address="32-87 Steinway St" />
                </div>

                <div className="col col-wider">
                    <Map address="622 Fulton, Brooklyn" />
                </div>
            </div> */}
            <br /><br /><br />
            <div className="row">
                <div className="col center">
                    <h1>Locations</h1>
                </div>
            </div>
            <div className="row">
                <div className="col center">
                    <h1>Astoria, NY</h1>
                </div>
            </div>
            <div className="row">
                <div className="col col-wider">
                    <div className="col col-wider">
                        <Map address="32-87 Steinway St" />
                    </div>

                </div>
                <div className="col">
                    <div className="row row-col">
                        <h2>Address</h2>
                        <p>28 Liberty St New York, NY 1000</p>
                    </div>
                    <div className="row-col">
                        <h2>Hours</h2>
                        <ul>
                            <li>
                                Mon - Thurs
                                <br />
                                7 AM - 8 AM
                            </li>
                            <li>
                                Friday
                                <br />
                                7 AM - 8 AM
                            </li>
                            <li>
                                Saturday
                                <br />
                                9 AM - 4 PM
                            </li>
                            <li>
                                Sunday
                                <br />
                                Closed
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col">
                    <h2>Subway Stops</h2>
                </div>
            </div>
            <div className="row">
                <div className="col center">
                    <h1>Williamsburg, NY</h1>
                </div>
            </div>
            <div className="row">
                <div className="col col-wider">
                    <Map address="622 Fulton, Brooklyn" />
                </div>
                <div className="col">
                    <div className="row row-col">
                        <h2>Address</h2>
                        <p>Williamsburg Ave 11023</p>
                    </div>
                    <div className="row-col">
                        <h2>Hours</h2>
                        <ul>
                            <li>
                                Mon - Thurs
                                <br />
                                7 AM - 8 AM
                            </li>
                            <li>
                                Friday
                                <br />
                                7 AM - 8 AM
                            </li>
                            <li>
                                Saturday
                                <br />
                                9 AM - 4 PM
                            </li>
                            <li>
                                Sunday
                                <br />
                                Closed
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col">
                    <h2>Subway Stops</h2>
                </div>
            </div>

        </div>
    );
};

export default Locations;
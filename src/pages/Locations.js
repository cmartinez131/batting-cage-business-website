import coverImage from '../assets/home-cover.png';

const Locations = () => {
    return (
        <div className="container locations">
            <div className="row">
                <img src={coverImage} alt="Cover"  />
            </div>
            <div className="row">
                <div className="col center">
                    <h1>Locations</h1>
                </div>
            </div>
            <div className="row">
                <div className="col center">
                    <h1>Long Island City, NY</h1>
                </div>
            </div>
            <div className="row">
                <div className="col col-wider">
                    <p>picture of map</p>
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
                    <p>picture of map</p>
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
            <div className="row">
                <div className="col center">
                    <h1>Los Angeles (Coming Soon)</h1>
                </div>
            </div>
            <div className="row">
                <div className="col col-wider">
                    <p>picture of map</p>
                </div>
                <div className="col">
                    <div className="row row-col">
                        <h2>Address</h2>
                        <p>Hollywood Blvd 12530</p>
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


            {/* Add your form fields here */}
        </div>
    );
};

export default Locations;
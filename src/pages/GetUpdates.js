import { useState } from 'react';
import './pageStyles.css'
const GetUpdates = () => {

    const [email, setEmail] = useState('');
    const [interest, setInterest] = useState({
        kids_baseball: false,
        adult_programming: false,
        new_club: false,
        blogs: false,
        other: false
    });

    const handleCheckboxChange = (event) => {
        setInterest({ ...interest, [event.target.value]: event.target.checked });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // here could do something with the email like send it to server
        console.log(email, interest);

        // clear the email field
        setEmail('');
        setInterest({
            kids_baseball: false,
            adult_programming: false,
            new_club: false,
            blogs: false,
            other: false
        });
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col center">
                    <h2>Join Our Mailing List </h2>
                    <h3>Get updates!</h3>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>Want to stay in the loop with all the latest from Swing Sphere? Subscribe to our updates tailored to your interests, and modify your preferences whenever you want by simply clicking on the "Manage Preferences" link located at the end of any email we send you.</p>
                    <p>Previously opted out from our emails? No worries! You can re-subscribe to our mailing lists by entering your email below and selecting the type of content you would like to receive from us again.</p>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col">
                        <label htmlFor="email">Enter your email:</label>
                    </div>
                    <div className="col">
                        <input
                            type="email"
                            id="email"
                            value={email}
                            placeholder="Email"
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col">
                        <button type="submit">Join</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p>Are you interested in:</p>
                        <div>
                            <input
                                type="checkbox"
                                id="kids_baseball"
                                value="kids_baseball"
                                checked={interest.kids_baseball}
                                onChange={handleCheckboxChange}
                            />
                            <label htmlFor="kids_baseball">The Kids Baseball Academy</label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                id="adult_programming"
                                value="adult_programming"
                                checked={interest.adult_programming}
                                onChange={handleCheckboxChange}
                            />
                            <label htmlFor="adult_programming">Adult Programming (Baseball, Community Events)</label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                id="new_club"
                                value="new_club"
                                checked={interest.new_club}
                                onChange={handleCheckboxChange}
                            />
                            <label htmlFor="new_club">New Club Openings</label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                id="blogs"
                                value="blogs"
                                checked={interest.blogs}
                                onChange={handleCheckboxChange}
                            />
                            <label htmlFor="blogs">Blogs</label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                id="other"
                                value="other"
                                checked={interest.other}
                                onChange={handleCheckboxChange}
                            />
                            <label htmlFor="other">Other</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col center">
                        <button type="submit">Sign Up</button>
                    </div>
                </div>
                <div className="row col">
                    <p>By submitting this form, you consent to receive marketing emails from Batting Blvd - Batting Remixed™. You can revoke your consent to receive emails at any time by using the ''Manage Your Preferences'' link at the bottom of every email.</p>
                </div>
            </form>
        </div>
    )
}

export default GetUpdates;

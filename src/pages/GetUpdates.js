import { useState } from 'react';
import './pageStyles.css';
import './GetUpdates.css';

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
        <div className="mail-list-container">
            <div className="mail-list-header">
                <h2 className="mail-list-h2">Join Our Mailing List </h2>
                <h3 className="mail-list-h3">Get updates!</h3>
            </div>
            <div className="mail-list-content">
                <p className="mail-list-text">Want to stay in the loop with all the latest from Batting Blvd? Subscribe to our updates tailored to your interests, and modify your preferences whenever you want by simply clicking on the "Manage Preferences" link located at the end of any email we send you.</p>
                <p className="mail-list-text">Previously opted out from our emails? No worries! You can re-subscribe to our mailing lists by entering your email below and selecting the type of content you would like to receive from us again.</p>
            </div>
            <form onSubmit={handleSubmit} className="mail-list-form">
                <div className="mail-list-form-group">
                    <label htmlFor="email" className="mail-list-label">Enter your email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        placeholder="Email"
                        onChange={e => setEmail(e.target.value)}
                        required
                        className="mail-list-input"
                    />
                    <button type="submit" className="mail-list-button">Join</button>
                </div>
                <div className="mail-list-interests">
                    <p className="mail-list-text">Are you interested in:</p>
                    <div className="mail-list-checkbox-group">
                        <input
                            type="checkbox"
                            id="kids_baseball"
                            value="kids_baseball"
                            checked={interest.kids_baseball}
                            onChange={handleCheckboxChange}
                            className="mail-list-checkbox"
                        />
                        <label htmlFor="kids_baseball" className="mail-list-checkbox-label">The Kids Baseball Academy</label>
                    </div>
                    <div className="mail-list-checkbox-group">
                        <input
                            type="checkbox"
                            id="adult_programming"
                            value="adult_programming"
                            checked={interest.adult_programming}
                            onChange={handleCheckboxChange}
                            className="mail-list-checkbox"
                        />
                        <label htmlFor="adult_programming" className="mail-list-checkbox-label">Adult Programming (Baseball, Community Events)</label>
                    </div>
                    <div className="mail-list-checkbox-group">
                        <input
                            type="checkbox"
                            id="new_club"
                            value="new_club"
                            checked={interest.new_club}
                            onChange={handleCheckboxChange}
                            className="mail-list-checkbox"
                        />
                        <label htmlFor="new_club" className="mail-list-checkbox-label">New Club Openings</label>
                    </div>
                    <div className="mail-list-checkbox-group">
                        <input
                            type="checkbox"
                            id="blogs"
                            value="blogs"
                            checked={interest.blogs}
                            onChange={handleCheckboxChange}
                            className="mail-list-checkbox"
                        />
                        <label htmlFor="blogs" className="mail-list-checkbox-label">Blogs</label>
                    </div>
                    <div className="mail-list-checkbox-group">
                        <input
                            type="checkbox"
                            id="other"
                            value="other"
                            checked={interest.other}
                            onChange={handleCheckboxChange}
                            className="mail-list-checkbox"
                        />
                        <label htmlFor="other" className="mail-list-checkbox-label">Other</label>
                    </div>
                </div>
                <div className="mail-list-submit">
                    <button type="submit" className="mail-list-button">Sign Up</button>
                </div>
                <div className="mail-list-footer">
                    <p className="mail-list-text">By submitting this form, you consent to receive marketing emails from Batting Blvd™. You can revoke your consent to receive emails at any time by using the ''Manage Your Preferences'' link at the bottom of every email.</p>
                </div>
            </form>
        </div>
    )
}

export default GetUpdates;

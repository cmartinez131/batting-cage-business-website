// import { GoogleLogin } from 'react-google-login';

const Signup = () => {

    const responseGoogle = (response) => {
        console.log(response);
        // you will get user info from response object, and you can use this info to create a user in your own system.
    }

    return (
        <div className="container center-content">
            <h1>Sign Up</h1>
            <form className="row row-col">
                {/* production build will not have username field */}
                <div className="col">
                    <label>
                        Username:
                        <input type="text" name="username" required />
                    </label>
                </div>
                <div className="col">
                    <label>
                        Email:
                        <input type="text" name="email" />
                    </label>
                </div>
                <div className="col">
                    <label>
                        First Name:
                        <input type="text" name="firstname" required />
                    </label>
                </div>
                <div className="col">
                    <label>
                        Last Name:
                        <input type="text" name="lastname" />
                    </label>
                </div>
                <div className="col">
                    <label>
                        Password:
                        <input type="password" name="password" />
                    </label>
                </div>
                <div className="col">
                    <button type="submit">Sign Up</button>
                </div>
            </form>
            {/* <GoogleLogin
                clientId="YOUR_CLIENT_ID"
                buttonText="Signup with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            /> */}
        </div>
    );
};

export default Signup;

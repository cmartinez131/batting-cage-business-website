const Login = () => {
    return (
        <div className="container center-content">
            <h1>Log In</h1>
            <form className="row row-col">
                <div className="col">
                    <label>
                        Username:
                        <input type="text" name="username" required />
                    </label>
                </div>
                <div className="col">
                    <label>
                        Password:
                        <input type="password" name="password" required />
                    </label>
                </div>
                <div className="col">
                    <button type="submit">Log In</button>
                </div>
            </form>
        </div>
    );
};

export default Login;

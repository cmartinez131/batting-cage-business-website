const Account = () => {
    return (
        <div className="container">
            <div className="container">
            <h2>Account</h2>
            <h2>Book a cage (Link to booking page)</h2>
            <h2>Account Info</h2>
            <h2>edit account</h2>
            <h2>Purchase history</h2>
            <h2>Help center</h2>
            <div className="row">
                <div className="col">1 of 3</div>
                <div className="col col-wider">2 of 3 (wider)</div>
                <div className="col">3 of 3</div>
            </div>
            <div className="row">
                <div className="col">1 of 3</div>
                <div className="col col-even-wider">2 of 3 (even wider)</div>
                <div className="col">3 of 3</div>
            </div>
        </div>
        </div>
    )
}

export default Account;

const Book = () => {
    return (
        <div className="container">
            <h2>Book a Cage</h2>
            <div className="row">
                <div className="col">1 of 3</div>
                <div className="col col-wider">2 of 3 (wider)</div>
                <div className="col">3 of 3</div>
            </div>
            <div className="row">
                <div className="col">1 of 3</div>
                <div className="col col-even-wider">2 of 3 (even wider)</div>
                <div className="col">3 of 3</div>
            </div>
        </div>
    )
}
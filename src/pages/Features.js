import './features.css';

const Features = () => {
    return (
        <div className="features">
            <h2>About</h2>
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

export default Features;

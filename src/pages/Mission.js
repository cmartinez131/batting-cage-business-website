import './pageStyles.css';
import coverImage from '../assets/home-cover.png';

const Mission = () => {
    return (
        <div className="container mission">
            <div className='row center-content'>
                <img src={coverImage} alt="Cover" className='img-med' />
            </div>
            <div className="row">
                <div className="col center">
                    <h1>Mission</h1>
                </div>
            </div>
            <div className="row">
                <div className="col center">
                    <p>Have fun!</p>
                </div>
            </div>
        </div>
    )
}

export default Mission;
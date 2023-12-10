import './pageStyles.css';
import coverImage from '../assets/home-cover.png';
import img1 from '../assets/features/image1.png'
import img2 from '../assets/features/image2.png'
import img3 from '../assets/features/image3.png'
import img4 from '../assets/features/image4.png'
import img5 from '../assets/features/image5.png'
import img6 from '../assets/features/image6.png'
import img7 from '../assets/features/image7.png'
import img8 from '../assets/features/image8.png'
import img9 from '../assets/features/image9.png'
import img10 from '../assets/features/image10.png'
import img11 from '../assets/features/image11.png'


const Features = () => {
    return (
        <div className="container features">
            <div className="home-cover-image">
                <h1 className="cover-title">Features</h1>
            </div>
            <div className="row">
                <div className="col">
                    <h2 className="features-header">Features:</h2>
                    <ul>
                        <li>8 Batting Cages</li>
                        <li>6 Regular Pitching Machines or Soft Toss</li>
                        <li>2 High Tech Automatic Pitching Machines with App Compatibility</li>
                        <li>Clean and Safe</li>
                        <li>book cage for pitching analysis</li>
                    </ul>
                </div>
                <div className="col"><img src={img1} alt="img" /></div>
                <div className="col"><img src={img2} alt="img" /></div>
            </div>
            <div className="row">
                <div className="col"><img src={img3} alt="img" /></div>
                <div className="col"><img src={img4} alt="img" /></div>
                <div className="col">
                    <h2 className="features-header">Advanced Pitching Machines</h2>
                    <ul>
                        <li>control pitches with an app or have a friend throw them to you</li>
                        <li>connects to iphone app</li>
                        <li>technology integration</li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h2 className="features-header">Multi-Purpose Practice and Warm up Areas</h2>
                    <ul>
                        <li>curtain system to open up cages</li>
                    </ul>
                </div>
                <div className="col"><img src={img5} alt="img" /></div>
                <div className="col"><img src={img6} alt="img" /></div>
            </div>
            <div className="row">
            <div className="col col-wider"><img src={img7} alt="img" /></div>
                <div className="col">
                    <h2 className="features-header">Equipment Included</h2>
                    <ul>
                        <li>safety equipment included such as nets and helmets</li>
                        <li>rent of bring yout own bats</li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h2 className="features-header">Comfortable Spectator Area</h2>
                    <ul>
                        <li>booth or a table with barstools as a spectator area</li>
                    </ul>
                </div>
                <div className="col col-wider center-content"><img src={img8} alt="img" className='img-med' /></div>
                <div className="col col-wider center-content"><img src={img9} alt="img" /></div>
            </div>
            <div className="row">
                <div className="col center"><h2>(Coming Soon)</h2></div>
            </div>
            <div className="row">
                <div className="col">
                    <h2>Technology integration such as pitch analysis, hit analysis and app integration</h2>
                </div>
                <div className="col col-wider"><img src={img10} alt="img" /></div>
            </div>
            <div className="row">

                <div className="col col-wider">
                <div className="col"><img src={img11} alt="img" /></div>
                </div>
                <div className="col"><h2>Full Concession Stand with snacks</h2></div>
            </div>
            
        </div>
    )
}

export default Features;

import './pageStyles.css'
import './About.css'

const About = () => {

    const coverImage = 'https://pso.cfaes.ohio-state.edu/sites/ctpp/files/imce/baseball_grass.png';

    return (
        <div className="container">
            <div className='row center-content cover-container'>
                <img src={coverImage} alt="Cover" className='img-small' />
                <div className="cover-text">About</div>
            </div>
            <div className="about-content">
                <p>Founded in 2023, Batting Blvd has grown from a humble start to become a beloved landmark in the community for baseball enthusiasts. Our journey began with a simple idea: to create a space where the love for baseball could be nurtured and shared by people of all ages and abilities.</p>
                
                <p>Over the years, we have expanded our offerings and facilities, constantly innovating to provide an unmatched experience for our patrons. From our state-of-the-art batting cages to our comprehensive training programs, every aspect of Batting Blvd is designed with our customers in mind.</p>

                <p>Our founder, a lifelong baseball fan, envisioned a place that went beyond just a sports facility. At Batting Blvd, we celebrate the spirit of the game, fostering an environment that encourages learning, improvement, and most importantly, fun.</p>

                <p>As we continue to grow, our commitment remains the same: to provide a welcoming, high-quality, and accessible baseball experience. We invite you to visit Batting Blvd, where every swing brings a story and every visit is a step closer to hitting your personal home run.</p>
            </div>
        </div>
    )
}

export default About;

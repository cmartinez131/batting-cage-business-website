import './pageStyles.css';


const coverImage = 'https://pso.cfaes.ohio-state.edu/sites/ctpp/files/imce/baseball_grass.png';
const plateImage = 'https://www.heatpressnation.com/cdn/shop/products/unisub-sublimation-blank-homeplate-plaque-10-x-10-4-pack.jpg?v=1600985064'

const Mission = () => {
    return (
        <div className="container mission">
            <div className='row center-content cover-container'>
                <img src={coverImage} alt="Cover" className='img-med' />
                <div className="cover-text">Our Mission</div>
            </div>
            
            <div className="row">
                <div className="col">

                </div>
                <div className="col col-even-wider">
                {/* <img src={plateImage} alt="home-plate" className='img-med home-plate-img' /> */}
                    <h3>At Batting Blvd, our mission is to make baseball accessible, diverse, and enjoyable for everyone, regardless of age or skill level. We understand that finding opportunities to play baseball can become more difficult as we grow older, and we're here to change that.</h3>

                    <p>We've designed Batting Blvd as a welcoming space for all - a place where baseball enthusiasts can reconnect with the sport they love and encourage beginners to discover the thrill of their first swing. With top-quality facilities and advanced, self-serve batting cages, we provide an environment where everyone can experience the fun and excitement of baseball.</p>

                    <p>Beyond just batting practice, we strive to cultivate a vibrant, diverse community of baseball lovers through engaging experiences and events. Whether it's a casual session after work, a weekend outing with family, or a special event, Batting Blvd promises memorable experiences beyond the batting cage.</p>

                    <p>Our dedicated team embodies the values of sportsmanship, inclusivity, and respect. As we grow and evolve, we continually seek feedback from our members to enhance and elevate the Batting Blvd experience.</p>

                    <p>Our vision extends beyond just promoting the sport. It's about fostering an active lifestyle, strengthening community bonds, and embracing diversity within the game. At Batting Blvd, we believe baseball is more than a game—it's a celebration of resilience, camaraderie, and shared joy. Join us, and let's spread the love for baseball, one swing at a time.</p>

                </div>
                <div className="col">

                </div>
            </div>
        </div>
    )
}

export default Mission;
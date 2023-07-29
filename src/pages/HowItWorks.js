import { Container, Row, Col } from 'react-bootstrap';
import './HowItWorks.css';
import coverImage from '../assets/home-cover.png';

const HowItWorks = () => {
    return (
        <Container className="my-container">
            <Row>
                <Col>
                    <img src={coverImage} alt="Cover" className="cover-image" />
                </Col>
            </Row>
            <Row className="my-row">
                <Col>
                    <h1 className='page-heading'>How it works:</h1>
                    <ol>
                        <li>Visit the Website or Download the App</li>
                        <li>Choose Your Cage and Time</li>
                        <li>Book a Cage</li>
                        <li>Payment</li>
                        <li>Confirmation</li>
                        <li>Arrive and Bat</li>
                        <li>Visit the Website or Download the App</li>
                        <li>Choose Your Cage and Time</li>
                        <li>Book a Cage</li>
                        <li>Payment</li>
                        <li>Confirmation</li>
                        <li>Arrive and Bat</li>
                    </ol>
                </Col>
            </Row>
        </Container>
    );
}

export default HowItWorks;


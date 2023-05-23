import {
  Carousel, Card, Button, Row, Col,
} from 'react-bootstrap';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';
import nnp from '../images/nnp-medium.jpg';
import zebra from '../images/zebra-landsape.jpg';
import kicc from '../images/kicc-landscape-large.jpg';
import nbo from '../images/nbo-medium.jpg';
import oneBed from '../images/onebed-image.png';
import tours from '../images/mdawida-tours.jpeg';
import voluntourism from '../images/voluntourism.png';
import '../styles/home.css';

const Home = () => {
  const carouselData = [
    { id: 1, imageUrl: nnp },
    { id: 2, imageUrl: zebra },
    { id: 3, imageUrl: kicc },
    { id: 4, imageUrl: nbo },
  ];

  return (
    <>
      <Card className="homepage">
        <div className="carousel-container">
          <Carousel autoPlay>
            {carouselData.map((item) => (
              <Carousel.Item key={item.id}>
                <img className="carousel-image" src={item.imageUrl} alt={`Slide ${item.id}`} />
              </Carousel.Item>
            ))}
          </Carousel>
          <div className="welcome-container">
            <h1 className="welcome">Welcome to Mdawida Homestay!</h1>
            <span className="span">Your home away from home</span>
          </div>
        </div>
        <Card.Body>
          <p className="about-homestay">
            Welcome to Mdawida Homestay, where comfort meets authenticity!
            Nestled in the heart of a vibrant community,
            our homestay offers a truly immersive experience for those seeking a
            genuine connection with the local culture.
            At Mdawida Homestay, we pride ourselves on providing a warm and inviting
            atmosphere that makes you feel right
            at home from the moment you arrive. Our carefully crafted accommodations
            blend traditional charm with modern
            amenities, ensuring a comfortable and memorable stay. Immerse yourself in
            the rich tapestry of our local
            traditions and customs as you interact with our friendly and hospitable family.
            Whether you&apos;re enjoying a cup
            of aromatic coffee in our communal lounge, exchanging stories with fellow travelers,
            or exploring the
            enchanting surroundings, you&apos;ll find that every moment at Mdawida Homestay is
            an opportunity to create
            lifelong memories.
          </p>
        </Card.Body>
        <div>
          <h2 className="offering">what we offer</h2>
          <Row>
            <Col md={4} sm={6} className="mb-4">
              <Card>
                <Card.Img variant="top" src={oneBed} alt="One Bed" className="offer-img" />
                <Card.Body>
                  <Card.Title>Accommodation</Card.Title>
                  <Card.Text>
                    We provide affordable accommodation for couples, families,
                    and groups in our safe and secure gated
                    community, close to all the sights and sounds of Nairobi.
                  </Card.Text>
                  <Button as={Link} to="/rooms" variant="primary">View Rooms</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={6} className="mb-4">
              <Card>
                <Card.Img variant="top" src={tours} alt="Tours" className="offer-img" />
                <Card.Body>
                  <Card.Title>Tours and Excursions</Card.Title>
                  <Card.Text>
                    Lovely excursions within Nairobi, we know the culture and
                    heartbeat of this amazing city and we want
                    to share it with you.
                  </Card.Text>
                  <Button as={Link} to="/activities" variant="primary">View Activities</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={6} className="mb-4">
              <Card>
                <Card.Img variant="top" src={voluntourism} alt="Voluntourism" className="offer-img" />
                <Card.Body>
                  <Card.Title>Voluntourism</Card.Title>
                  <Card.Text>
                    This is Volunteering coupled with Tourism. We offer you an
                    opportunity to volunteer in our many
                    programs as you enjoy your Safari&apos;s all over Kenya.
                  </Card.Text>
                  <Button as={Link} to="/activities" variant="primary">View Activities</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Card>
    </>
  );
};

export default Home;

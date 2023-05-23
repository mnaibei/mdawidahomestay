import {
  Card, Col, Container, Row,
} from 'react-bootstrap';
import Map from './Map';

const Contact = () => (
  <Container>
    <Row>
      <Col>
        <Card className="my-4">
          <Card.Body>
            <Card.Title>Contact Mdawida Homestay</Card.Title>
            <Card.Text>
              <p>Email: contact@mdawidahomestay.com</p>
              <p>Phone: +254726827009</p>
              <p>Location: Nairobi, Kenya</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col>
        <Card className="mb-4">
          <Card.Body>
            <Map />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Contact;

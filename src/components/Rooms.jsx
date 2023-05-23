import {
  Card, Button, Row, Col,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import onebed from '../images/one-bedroom-mdawida.png';
import bedsitter from '../images/single-room-mdawida.png';
import '../styles/room.css';

const Rooms = () => (
  <Card className="rooms-container">
    <Card.Body>
      <Card.Text className="text-justify">
        At Mdawida Homestay, we offer a range of comfortable and well
        -appointed rooms designed to cater to your individual needs.
        Whether you&apos;re traveling alone, as a couple, or with a small
        group, our studio and one-bedroom ensuite accommodations provide
        a cozy and inviting space to relax and unwind.
      </Card.Text>
      <Card.Text className="text-justify">
        Our studio rooms are thoughtfully designed to maximize space and
        functionality. Featuring a combined living and sleeping area, these
        rooms are perfect for solo travelers or couples seeking a cozy retreat.
        Enjoy the convenience of a well-equipped kitchenette, where you can
        prepare light meals or brew a cup of coffee to start your day. Each
        studio room is furnished with comfortable bedding, modern amenities,
        and a private bathroom, ensuring a restful and enjoyable stay.
      </Card.Text>
      <Card.Text className="text-justify">
        For those seeking a bit more space and privacy, our one-bedroom ensuite
        rooms are the perfect choice. These well-appointed accommodations feature
        a separate bedroom, providing an extra level of privacy and comfort.
        Unwind in the spacious living area, complete with a cozy seating arrangement
        and a dining table for intimate meals. The fully equipped kitchen allows
        you to prepare your own meals at your convenience. Each one-bedroom ensuite
        room boasts a private bathroom, ensuring a seamless and convenient stay.
      </Card.Text>
      <Card.Title>Accommodation Options</Card.Title>
      <Row className="rooms-list">
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>One Bedroom Studio</Card.Title>
              <Card.Img variant="top" src={onebed} className="room-image room-image-desktop" />
              <Card.Text className="text-justify">
                This is your little home away from Home, we have made it into a
                cozy nest just for you. It has a private entrance with a secured door.
                We have all the amenities to help your stay become a memorable one.
                A Kitchenette for all those delicious home-cooked meals you want to
                prepare! Also included: Wireless and fast internet, Television,
                Private entrance. Looking forward to having you here.
              </Card.Text>
              <Card.Text>
                <strong>COSTS:</strong>
                <br />
                Single: USD25
                <br />
                Double: USD40
                <br />
                Discounts are available for stays longer than one week!!!!
                <br />
                PLEASE NOTE: PRIOR BOOKING IS MANDATORY, WE DO NOT TAKE WALK-IN CLIENTS
              </Card.Text>
              <Button as={Link} to="/contact" variant="primary">Book</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Private En-suite Room</Card.Title>
              <Card.Img variant="top" src={bedsitter} className="room-image room-image-desktop" />
              <Card.Text className="text-justify">
                This lovely room is compact but has everything you would need.
                Ideal for singles or couples, we provide everything to make your stay
                memorable. A Kitchenette for all those delicious home-cooked meals
                you want to prepare! Also included: Wireless and fast internet,
                Television, Private entrance. Looking forward to having you here.
              </Card.Text>
              <Card.Text>
                <strong>COSTS:</strong>
                <br />
                Single: USD20
                <br />
                Double: USD32
                <br />
                Discounts are available for stays longer than one week!!!!
                <br />
                PLEASE NOTE: PRIOR BOOKING IS MANDATORY, WE DO NOT TAKE WALK-IN CLIENTS
              </Card.Text>
              <Button as={Link} to="/contact" variant="primary">Book</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Card.Body>
  </Card>
);

export default Rooms;

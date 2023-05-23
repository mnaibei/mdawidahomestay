import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
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
      <div className="homepage">
        <div className="carousel-container">
          <Carousel showThumbs={false} autoPlay>
            {carouselData.map((item) => (
              <div key={item.id}>
                <img src={item.imageUrl} alt={`Slide ${item.id}`} />
              </div>
            ))}
          </Carousel>
          <div className="welcome-container">
            <h1 className="welcome">
              Welcome to Mdawida Homestay!
            </h1>
            <span className="span">Your home away from home</span>
          </div>
        </div>
        <p className="about-homestay">
          Welcome to Mdawida Homestay, where comfort meets authenticity! Nestled in the heart of a
          vibrant
          community, our homestay offers a truly immersive experience for those seeking a genuine
          connection with the local culture.
          At Mdawida Homestay, we pride ourselves on providing a warm and inviting atmosphere that
          makes
          you
          feel right at home from the moment you arrive. Our carefully crafted accommodations blend
          traditional charm with modern amenities, ensuring a comfortable and memorable stay.
          Immerse yourself in the rich tapestry of our local traditions and customs as you interact
          with our friendly and hospitable family. Whether you&apos;re enjoying a cup of aromatic
          coffee
          in our communal lounge, exchanging stories with fellow travelers, or exploring the
          enchanting surroundings, you&apos;ll find that every moment at Mdawida Homestay is an
          opportunity
          to create lifelong memories.
        </p>
        <div>
          <h2 className="offering">what we offer</h2>
          <ul className="list">
            <li>
              <h3>accommodation</h3>
              <img src={oneBed} alt={oneBed} className="one-bed" />
              <p>
                We provide affordable accommodation for couples, families and groups in our safe
                and secure gated community, close to all the sights and sounds of Nairobi.
              </p>
            </li>
            <li>
              <h3>tours and excursions</h3>
              <img src={tours} alt={tours} className="tours" />
              <p>
                Lovely excursions within Nairobi, we know the culture and heartbeat of
                this amazing city and we want to share with you.
              </p>
            </li>
            <li>
              <h3>voluntourism</h3>
              <img src={voluntourism} alt={voluntourism} className="voluntourism" />
              <p>
                This is Volunteering coupled with Tourism. We offer you an opportunity
                to volunteer in our many programs as you enjoy your Safari&apos;s all over Kenya.
              </p>
            </li>
          </ul>
        </div>
      </div>

    </>
  );
};

export default Home;

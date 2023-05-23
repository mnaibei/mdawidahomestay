import '../styles/footer.css';

const Footer = () => (
  <footer>
    <div className="footer-content">
      <div className="footer-section">
        <h3>Contact Us</h3>
        <p>Email: contact@mdawidahomestay.com</p>
        <p>Phone: +254726827009</p>
        <p>Address: Sunvalley Estate Phase 1, Nairobi, Kenya</p>
      </div>
      <div className="footer-section">
        <h3>Follow Us</h3>
        <ul className="social-media">
          <li>
            <a href="https://web.facebook.com/?_rdc=1&_rdr">Facebook</a>
          </li>
          <li>
            <a href="https://twitter.com/home">Twitter</a>
          </li>
          <li>
            <a href="https://www.instagram.com/">Instagram</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Useful Links</h3>
        <ul className="useful-links">
          <li>
            <a href="/home">About Us</a>
          </li>
          <li>
            <a href="/rooms">Rooms</a>
          </li>
          <li>
            <a href="/activities">Tours & Excursions</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <p>
        &copy;
        {new Date().getFullYear()}
        {' '}
        Mdawida Homestay. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;

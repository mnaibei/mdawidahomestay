import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul className="navlinks">
      <NavLink to="/home">home</NavLink>
      <NavLink to="/rooms">rooms</NavLink>
      <NavLink to="/activities">activities</NavLink>
      <NavLink to="/contact">contact</NavLink>
    </ul>
  </nav>
);

export default Navbar;

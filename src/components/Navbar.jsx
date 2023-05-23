import { NavLink, Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { GiKenya } from 'react-icons/gi';

const Navigation = () => {
  const closeMobileMenu = () => {
    const toggleButton = document.getElementsByClassName('navbar-toggler')[0];
    if (toggleButton.classList.contains('show')) {
      toggleButton.click();
    }
  };

  return (
    <Navbar expand="md" bg="light" variant="light" sticky="top">
      <Navbar.Brand as={Link} to="/" onClick={closeMobileMenu}>
        Mdawida Homestay
        {' '}
        <GiKenya />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-collapse" />
      <Navbar.Collapse id="navbar-collapse">
        <Nav className="ml-auto" onClick={closeMobileMenu}>
          <NavLink to="/home" className="nav-link">Home</NavLink>
          <NavLink to="/rooms" className="nav-link">Rooms</NavLink>
          <NavLink to="/activities" className="nav-link">Activities</NavLink>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;

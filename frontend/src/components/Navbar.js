import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavbarComponent() {
  return (
    <Navbar className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Investment2</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/"></Nav.Link>
          <Nav.Link as={Link} to="/about"></Nav.Link>
          <Nav.Link as={Link} to="signup">Register</Nav.Link>
          <Nav.Link as={Link} to="signin">Login</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;

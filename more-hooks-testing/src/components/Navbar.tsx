import { Container, Nav, Navbar as N } from "react-bootstrap";

const Navbar = () => {
  return (
    <N bg="light" expand="lg" sticky="top" className="border-bottom">
      <Container>
        <N.Brand href="#home">more-hooks</N.Brand>
        <N.Toggle aria-controls="basic-navbar-nav" />
        <N.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#useAsync">useAsync</Nav.Link>
            <Nav.Link href="#useOnMount">useOnMount</Nav.Link>
            <Nav.Link href="#createDefinedContext">createDefinedContext</Nav.Link>
          </Nav>
        </N.Collapse>
      </Container>
    </N>
  );
};

export default Navbar;

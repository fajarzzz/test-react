import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import '../style/Navbar.css';

function Collapsible() {
    const [show, setShow] = useState(false);
    const showDropdown = (e) => {
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home" id='brand'>Company</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <NavDropdown title="ABOUT" id="collasible-nav-dropdown" show={show}
                            onMouseEnter={showDropdown}
                            onMouseLeave={hideDropdown}>
                            <NavDropdown.Item href="#action">History</NavDropdown.Item>
                            <NavDropdown.Item href="#action">Vision Mission</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link eventKey={0} href="#action">OUR WORK</Nav.Link>
                        <Nav.Link eventKey={1} href="#action">
                            OUR TEAM
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#action">CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Collapsible;
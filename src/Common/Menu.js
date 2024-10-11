import { Container, Nav, Navbar } from "react-bootstrap";

export default function Menu() {
    return (
        <>
            <Navbar data-bs-theme='dark' bg='dark' expand='lg'>
                <Container>
                    <Navbar.Brand>
                        Gujarat Tourism
                        <img className="px-3" src="https://www.gujarattourism.com/content/dam/gujrattourism/images/other-images/gujarat-tourism-logo.png" alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="ms-auto">
                            <Nav.Link src='#home'>Home</Nav.Link>
                            <Nav.Link src='#About'>About Us</Nav.Link>
                            <Nav.Link src='#home'>Updates</Nav.Link>
                            <Nav.Link src='#home'>Contact us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );

}
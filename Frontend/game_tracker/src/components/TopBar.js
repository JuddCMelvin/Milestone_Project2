import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

export default function TopBar() {
    return (
        <div style={{display: "flex"}}>
            <Navbar className="Navbar" bg="light" expand="lg" style={{display: "flex", justifyContent: "space-between"}}>
                <Navbar.Brand style={{ margin: "5px 0 0 20px"}} href="#home">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKSd4eW0UAX-pVbLUQCVdciAO2XAuJ6tP4Ag&s" width= "40px" title="game boy advance icons" />
                </Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="#LogIn">Log In</Nav.Link>
                        <Button variant="success">Sign Up</Button>{' '}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
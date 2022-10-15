import React from "react"
import {Nav , Navbar, Container} from "react-bootstrap";
import "./Nav.css"
import logo from  "../../Images/logo2.jpg";

const Navs = ()=>{
    return(
    <Navbar  expand="lg">
        <Container>
            <Navbar.Brand href="#home">
                <img src={logo}  title="logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">about us</Nav.Link>
                    <Nav.Link href="#link">explore foods</Nav.Link>
                    <Nav.Link href="#link">reviews</Nav.Link>
                    <Nav.Link href="#link">Faq</Nav.Link>
                </Nav>
                <Nav.Link id="btn_nav">01274836324</Nav.Link>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default Navs
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './Navber.css';

const Navber = () => {
    return (
        <div>
            <Navbar.Brand className="fs-1 fw-bold text-white" href="/">News Portal</Navbar.Brand>

            <Navbar className="fs-5 fw-bold text-white" collapseOnSelect expand="lg" bg="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="fs-5 border-bottom m-auto">
                            <a className=" m-2  link-light p-2" href="/">Home</a>
                            <a className=" m-2  link-light p-2" href="/sports">Sports</a>
                            <a className=" m-2  link-light p-2" href="/international">international</a>
                            <a className=" m-2  link-light p-2" href="/contact">Contact</a>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navber;
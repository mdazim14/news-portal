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
            <Navbar.Brand className="fs-1 fw-bold text-white" to="/">News Portal</Navbar.Brand>

            <Navbar className="fs-5 fw-bold text-white" collapseOnSelect expand="lg" bg="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="fs-5 border-bottom m-auto">
                            <Link className=" m-2  link-light p-2" to="/">Home</Link>
                            <Link className=" m-2  link-light p-2" to="/sports">Sports</Link>
                            <Link className=" m-2  link-light p-2" to="/international">international</Link>
                            <Link className=" m-2  link-light p-2" to="/contact">Contact</Link>
                            <Link className=" m-2  link-light p-2" to="/admin">Admin</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navber;
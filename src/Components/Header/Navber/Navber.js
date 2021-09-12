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
            <Navbar.Brand className="fs-1 fw-bold text-white d-block text-center" to="/">News Portal</Navbar.Brand>

            <Navbar className="fs-5 fw-bold text-white" collapseOnSelect expand="lg" bg="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="fs-5 border-bottom m-auto">
                            <div>
                                <Link className="link-light p-5" to="/">Home</Link>
                            </div>
                            <div>
                                <Link className="link-light p-5" to="/sports">Sports</Link>
                            </div>
                            <div>
                                <Link className="link-light p-5" to="/international">International</Link>
                            </div>
                            <div>
                                <Link className="link-light p-5" to="/contact">Contact</Link>
                            </div>
                            <div>
                                <Link className="link-warning p-5" to="/admin">Admin</Link>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navber;
import React from 'react';
import Container from 'react-bootstrap/Container';
import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import './Navmenu.css';

function NavMenu() {
    return (
        <Navbar className='navbar navbar-vertical navbar-expand-lg navbar-dar' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container fluid>

                <Navbar.Toggle aria-controls="navbar-menu" />
                <h1 className="navbar-brand navbar-brand-autodark">
                    <Link to='/dashboard'>
                        <img src={require('../images/Sunware-logo-white.png')} width="110" height="32" alt="Logo" className="img-fluid navbar-brand-image" />
                    </Link>
                </h1>
                <Navbar.Collapse id="navbar-menu">
                    <Nav className="navbar-nav pt-lg-3">
                        <Nav.Item>
                            <Link className='nav-link' to="/dashboard">
                                <span className="nav-link-icon">
                                    <Icon.House />
                                </span>
                                Home</Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Link className='nav-link' to="/students">
                                <span className="nav-link-icon">
                                    <Icon.People />
                                </span>
                                Students</Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Link className='nav-link' to="/organization">
                                <span className="nav-link-icon">
                                    <Icon.Building />
                                </span>
                                Organization
                            </Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link >
                                <span className="nav-link-icon">
                                    <Icon.PersonBadge />
                                </span>
                                Account</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link >
                                <span className="nav-link-icon">
                                    <Icon.Stickies />
                                </span>
                                Order Details
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className='nav-link' to="/login">
                                <span className="nav-link-icon">
                                    <Icon.BoxArrowLeft />
                                </span>
                                Logout
                            </Link>
                        </Nav.Item>
                    </Nav>

                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}

export default NavMenu
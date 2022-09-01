import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import './Header.css';

function Header() {
    return (
        <header className='navbar navbar-expand-md navbar-light d-none d-lg-flex d-print-none'>
            <div className='container-fluid'>
         
                <div className="navbar-nav flex-row ms-auto">
                    <div className="d-none d-md-flex">
                        <NavDropdown title={
                            <span className='personsvg'>
                                <Icon.PersonCircle />
                                Paweł Kuna
                            </span>
                        } id="nav-dropdown">
                                <div className="card">
                                <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Profile</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
                                </div>
                        </NavDropdown>

                    </div>
                    
                </div>
            </div>
        </header>
    )
}

export default Header;
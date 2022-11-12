import React from "react";
import {Navbar, Nav} from 'react-bootstrap'
import logo from '../../assets/img/ticketlogo.png'
import { Link } from "react-router-dom"

export const Header = () => {
    return(
        <div>
            <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
                
                <Navbar.Brand>
                    <img src={logo} alt="logo" width="50px" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/dashboard">Dashboard</Link>
                        <Link to="/dashboard">Tickets</Link>
                        <Link to="/dashboard">Logout</Link>
                        {/* <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link href="/dashboard">Tickets</Nav.Link>
                        <Nav.Link href="/dashboard">Logout</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
          </div>
            
    )
}
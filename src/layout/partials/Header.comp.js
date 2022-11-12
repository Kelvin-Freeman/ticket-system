import React from "react";
import {Navbar, Nav} from 'react-bootstrap'
import logo from '../../assets/img/ticketlogo.png'
import { useNavigate } from 'react-router-dom'
// import { Link } from "react-router-dom"
import { LinkContainer } from "react-router-bootstrap";

export const Header = () => {
    const navigate = useNavigate();

    const redirectToLogin = () => {
        navigate('/')
    }
   
    return(
        <div>
            <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
                
                <Navbar.Brand>
                    <img src={logo} alt="logo" width="50px" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        {/* <Link to="/dashboard">Dashboard</Link>
                        <Link to="/tickets">Tickets</Link>
                        <Link to="">Logout</Link> */}
                        <LinkContainer to="/dashboard"><Nav.Link>Dashboard</Nav.Link></LinkContainer>
                        <LinkContainer to="/tickets"><Nav.Link>Tickets</Nav.Link></LinkContainer>
                        <Nav.Link onClick={redirectToLogin}>Logout</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
          </div>
            
    ) 
}
    


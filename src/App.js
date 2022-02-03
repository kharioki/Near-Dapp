import 'regenerator-runtime/runtime'
import React from 'react'
import { login, logout } from './utils'
import './global.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Logo from './assets/DeCash.svg';

import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

import getConfig from './config'
const { networkId } = getConfig(process.env.NODE_ENV || 'development')

export default function App() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav.Link>Transactions</Nav.Link>
            <Nav.Link>Login</Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

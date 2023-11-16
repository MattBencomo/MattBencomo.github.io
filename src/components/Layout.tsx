import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

function Layout() {
  return (
    <>
      <Navbar expand='lg' className='bg-body-tertiary'>
        <Container>
          <Navbar.Brand>Matt "Adam" Bencomo</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Link className='nav-link' to='/'>
                About
              </Link>
              <Link className='nav-link' to='/projects'>
                Projects
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default Layout;

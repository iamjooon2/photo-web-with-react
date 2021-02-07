import React from 'react';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <>
      <Navbar>
        <Navbar.Toggle />
        <Navbar.Collapse>
        </Navbar.Collapse>
          <Navbar.Collapse className = "justify-content-center">
            <Navbar.Brand href="/main">
              Photo-web
            </Navbar.Brand>
            </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="/login">Login</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
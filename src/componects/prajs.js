import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from './logomy.png';
import '../nilcss/pra.css';

const NavTwo = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleToggle = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div id="navtwo">
      <div className="nav-container">
        <Nav className={`justify-content-end ${showLinks ? 'show' : ''}`} activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">
              <img src={logo} alt="Home" />
              Active
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">
              <img src={logo} alt="Link" />
              Link
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">
              <img src={logo} alt="Link" />
              Link
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3">
              <img src={logo} alt="Link" />
              Link
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <button className="nav-toggle" onClick={handleToggle}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </div>
  );
};

export default NavTwo;

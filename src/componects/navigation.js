import Stack from "react-bootstrap/Stack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "../nilcss/nav.css";
import logo from "./logomy.png";
import Nav from "react-bootstrap/Nav";

function Navigate() {
  return (
    <>
      <div id="unique-navone">
        <Stack direction="horizontal" gap={3} style={{ marginTop: '15px' }} >
          <div id="unique-free-shopping" className="p-2">
            Free Shipping for all orders of ₹ 8,303
          </div>
          <div id="unique-email-container" className="p-2 ms-auto">
            <p id="unique-email">
              <FontAwesomeIcon icon={faEnvelope} />{" "}
              <a id="unique-mail" href="mailto:pavanvkoli@gmail.com">
                pavanvkoli@gmail.com
              </a>
            </p>
          </div>
          <div id="unique-phone-container" className="p-2">
            <p id="unique-phone">
              <FontAwesomeIcon icon={faPhone} />{" "}
              <a id="unique-phone-link" href="tel:+1234567890">
                +1234567890
              </a>
            </p>
          </div>
        </Stack>
        <hr />

        <div id="unique-navtwo">
          <Stack direction="horizontal" gap={3}>
            <div id="unique-logo" className="p-2">
              <Nav.Item>
                <Nav.Link href="/">
                  <img id="unique-logo-img" src={logo} alt="Home" />
                </Nav.Link>
              </Nav.Item>
            </div>

            <div id="unique-links-container" className="p-2 ms-auto">
              <Nav className="justify-content-end" activeKey="/home">
                <Nav.Item>
                  <Nav.Link id="unique-home-link" href="/#/">
                    Home
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link id="unique-products-link" href="#/products">
                    Products
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link id="unique-aboutus-link" href="#/aboutus">
                    About us
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link id="unique-contactus-link" href="#/contactus">
                    Contact us
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </Stack>
          <hr />
        </div>
      </div>
    </>
  );
}
export default Navigate;

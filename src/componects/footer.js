// import react from "react";
// import {Link} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import logo from "./logomy.png";

import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faEnvelope,  } from "@fortawesome/free-solid-svg-icons";
import {
  faCcVisa,
  faCcMastercard,
  faCcPaypal,
} from "@fortawesome/free-brands-svg-icons";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import "../nilcss/foot.css";
function Footer() {
  return (
    <>
      <div id="container">
        <Container>
          <Row>
            <Col style={{ width: "50%" }}>
              <div className="p-2">
                {" "}
                  <img src={logo} alt="Home" />
                  <br></br>
                  <br></br>
                  <br></br>
              </div>
              <div className="p-2">Stay tuned for latest news and updates.</div>
              <div className="p-2">
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Email address"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <Button variant="outline-secondary" id="button-addon2">
                    🏹 Subscribe
                  </Button>
                </InputGroup>
              </div>
              <div className="p-2">
                {" "}
                <Form>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                      <Form.Check // prettier-ignore
                        type={type}
                        id={`default-${type}`}
                        label={`I accept terms and conditions & and privacy policy`}
                      />
                    </div>
                  ))}
                </Form>
              </div>
            </Col>

            {/* //column 2 */}

            <Col>
              <div id="coltwo">
                <Nav defaultActiveKey="/home" className="flex-column">
                  <th>Information</th>
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Newsroom
                  </a>
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dilivery Information
                  </a>
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy policy
                  </a>
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sales
                  </a>
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms and conditions
                  </a>
                </Nav>
              </div>
            </Col>

            {/* column 3 */}
            <Col>
              <div id="colthree">
                <Nav defaultActiveKey="/home" className="flex-column">
                  <th>Out Services</th>
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Shipping
                  </a>
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Returns
                  </a>
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Product Recalls
                  </a>
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact us
                  </a>
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sitemaps
                  </a>
                </Nav>
              </div>
            </Col>

            {/* column 4 */}

            <Col>
              <Stack gap={3}>
                <th>About/Contact us</th>

                <div className="p-2">Kaustubh (Director)</div>
                <div className="p-2">Nilpankh India Pvt Ltd</div>
                <div className="p-2">
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> Plot no 18, Sanmarg
                  nagar,<br></br> Mahal, Nagpur-440024, Maharashtra, India
                </div>
                <p id="pemail">
                  <FontAwesomeIcon icon={faEnvelope} />
                  Email :{" "}
                  <a href="mailto:pavanvkoli@gmail.com">pavanvkoli@gmail.com</a>
                </p>
              </Stack>
              
              <div>
                <div id="icons">
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagram} size="2x" />

                  </a>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebookF} size="2x" />
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                  </a>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                  </a>
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <br></br>
      <div className="foottwo">
        
        <Stack direction="horizontal" gap={3}>
          
          <div className="p-2">
            Copyright 2024 Nilpankh | All rights reserved | Designed by
            Amplemind
          </div>
          <div className="p-2 ms-auto">
            <div id="belowicons">
              <a
                href="https://www.visa.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faCcVisa} size="2x" />
              </a>
              <a
                href="https://www.mastercard.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faCcMastercard} size="2x" />
              </a>
              <a
                href="https://www.paypal.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faCcPaypal} size="2x" />
                {/* <FontAwesomeIcon icon={faStar} size="2x" /> */}
                {/* <FontAwesomeIcon icon={faStarHalf} size="2x" /> */}

                

              </a>
            </div>
          </div>
        </Stack>
      </div>
    </>
  );
}
export default Footer;

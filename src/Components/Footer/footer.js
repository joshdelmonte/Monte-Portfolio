import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

//These are the icons I want to use for the social media links below
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <h3>Contact Us</h3>
            <ul>
              <li id="email">Email: joshdelmonte@gmail.com</li>
              <li id="phone">Phone: 719-360-0274</li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <h3>Resume</h3>
            <a href="https://1drv.ms/b/s!AhDbzGZkV_bainR6XblheiahgX_5?e=JZ3b2E">Resume</a>
          </Col>
          <Col xs={12} md={4}>
            <h3>Social Media</h3>
            <ul>
              <li> <FontAwesomeIcon icon={faFacebook} />
                <a href="https://www.facebook.com/joshdelmonte">Facebook</a>
              </li>
              <li> <FontAwesomeIcon icon={faLinkedin} />
                <a href="https://www.linkedin.com/in/joshua-delmonte-51090b215/">LinkedIn</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
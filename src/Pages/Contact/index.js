import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';

// import Resume from '../../Assets/images/document-icon.png';
// import Facebook from '../../Assets/images/facebook-icon.jpg';
// import LinkedIn from '../../Assets/images/linkedin-icon.png';
//These are the icons I want to use for the social media links below
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'


function Contact() {
  return (
    <div className="contact">
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <h3>~Please feel free to contact me~</h3>
            <ul>
              <li id="email" href="joshdelmonte@gmail.com"><i>Email: joshdelmonte@gmail.com</i></li>
            </ul>
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
    </div>
  );
}

export default Contact;

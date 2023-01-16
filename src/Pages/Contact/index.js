import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Contact() {
  return (
    <div className="contact">
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <h3>Contact Us</h3>
            <ul>
              <li id="email">Email: joshdelmonte@gmail.com<img src={require('./gmail-icon.png')} alt='G-mail' /></li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <h3>Resume</h3>
            <a href="path/to/your-resume.pdf">Download my resume</a>
          </Col>
          <Col xs={12} md={4}>
            <h3>Social Media</h3>
            <ul>
              <li><img src={require('./facebook-icon.png')} alt='Facebook' />
                <a href="https://www.facebook.com/joshdelmonte">Facebook: Josh Delmonte</a>
              </li>
              <li><img src={require('./linkedin-icon.png')} alt='LinkedIn' />
                <a href="https://www.linkedin.com/in/joshua-delmonte-51090b215/">LinkedIn: linkedin.com/in/joshua-delmonte-51090b215</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;

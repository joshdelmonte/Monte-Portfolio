import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
//Same as footer but might need to delete or modify this or the footer
function Contact() {
  return (
    <contact>
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <h3>Contact Us</h3>
            <ul>
                <img src={require('./gmail-icon.png')} alt='G-mail' />
              <li id="email">Email: joshdelmonte@gmail.com</li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <h3>Resume</h3>
            <a href="path/to/your-resume.pdf">Download my resume</a>
          </Col>
          <Col xs={12} md={4}>
            <h3>Social Media</h3>
            <ul>
            <img src={require('./facebook-icon.png')} alt='Facebook' />
<li href="https://www.facebook.com/joshdelmonte">Facebook: Josh Delmonte</li>
<img src={require('./linkedin-icon.png')} alt='LinkedIn' />
              <li href="https://www.linkedin.com/in/joshua-delmonte-51090b215/">LinkedIn: linkedin.com/in/joshua-delmonte-51090b215</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </contact>
  );
}

export default Contact;
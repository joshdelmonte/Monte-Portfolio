import React from 'react';
import {
  Container,
  Row,
  Button,
  Card
} from 'react-bootstrap';
import sampleWeb from '../../Assets/images/profile_picture.jpg';
import './style.css';

const Portfolio = () => {

  return (
    <>

      <Container className="display-flex">
        <Row className="d-flex flex-wrap">
          <Card className='project-card'>
            <Card.Img src={sampleWeb} />
            <Card.Body>
              <Card.Title>Sample Web Development</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary" href="https://joshdelmonte.github.io/Preliminary-Sample-Web-Development/">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card className='project-card'>
            <Card.Img src={sampleWeb} />
            <Card.Body>
              <Card.Title>Sample Web Development</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary" href="https://joshdelmonte.github.io/Preliminary-Sample-Web-Development/">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card className='project-card'>
            <Card.Img src={sampleWeb} />
            <Card.Body>
              <Card.Title>Sample Web Development</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary" href="https://joshdelmonte.github.io/Preliminary-Sample-Web-Development/">Go somewhere</Button>
            </Card.Body>
          </Card>
          {/* <a href="#">
            <img
              src="project-1.jpg"
              alt="Project 1"
              className="img-thumbnail mr-3 mb-3"
            />
            <p>Sample Web Development</p>
            <a href="https://joshdelmonte.github.io/Preliminary-Sample-Web-Development/"><button type="button">Previous Works</button></a>
            <p>Project 1</p>
          </a> */}
          {/* <a href="https://angi-adema.github.io/Movie-Finder/"><button type="button">Previous Works</button></a> */}
          {/* <p>Project 2: Veggiebook</p>
        
        <a href="#">
          <img
            src="project-4.jpg"
            alt="Project 4"
            className="img-thumbnail mr-3 mb-3"
          />
          <p>Project 4</p>
        </a>
        <a href="#">
          <img src="project-5.jpg" alt="Project 5" className="img-thumbnail mr-3 mb-3" />
          <p>Project 5</p>
        </a> */}
        </Row>
      </Container>
    </>
  );
};

export default Portfolio;


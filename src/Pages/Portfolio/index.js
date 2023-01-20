import React from 'react';
import {
  Container,
  Row,
  Button,
  Card
} from 'react-bootstrap';
import sampleWeb from '../../Assets/images/Previous-additions.png';
import document from '../../Assets/images/document-image.jpg';
import './style.css';

const Portfolio = () => {

  return (
    <>

      <Container className="display-flex">
        <Row className="d-flex flex-wrap">
          <Card className='project-card' style={{ maxWidth: '100px' }}>
            <Card.Img src={document} fluid alt='...'/>
            <Card.Body>
              <Card.Title>Sample Web Development</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary" href="https://joshdelmonte.github.io/Preliminary-Sample-Web-Development/" >~Click here for the link~</Button>
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
              <Button variant="primary" href="https://angi-adema.github.io/Movie-Finder/">~Click here for the link~</Button>
            </Card.Body>
          </Card>
          <Card className='project-card'>
            <Card.Img src={document} />
            <Card.Body>
              <Card.Title>Sample Web Development</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary" href="https://joshdelmonte.github.io/Preliminary-Sample-Web-Development/">~Click here for the link~</Button>
            </Card.Body>
          </Card>
         
        </Row>
      </Container>
    </>
  );
};

export default Portfolio;


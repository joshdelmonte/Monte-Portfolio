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
import Accordion from 'react-bootstrap/Accordion';

const Portfolio = () => {

  return (
    <>

      <Container className="display-flex">
        <Row className="d-flex flex-wrap justify-content-center">
          <Card className='project-card' style={{ maxWidth: '100px' }}>
            <Card.Img src={sampleWeb}className="samplecard" fluid alt='...'/>
            <Card.Body>
              <Card.Title>Sample Web Development</Card.Title>
              <Accordion>
              <Card.Text>
                This was the first of many projects I have worked on. It was a simple.
              </Card.Text>
              <Button variant="primary" href="https://joshdelmonte.github.io/Preliminary-Sample-Web-Development/" >~Click here for the link~</Button>
              </Accordion>
            </Card.Body>
          </Card>
          <Card className='project-card'>
            <Card.Img src={document} />
            <Card.Body>
              <Card.Title>Movie Finder</Card.Title>
              <Accordion>
              <Card.Text>
              As a novice project, I developed a movie finder app that utilizes the OMDB API. Initially, our team consisted of five members; however, as the project progressed, several classmates withdrew, leaving only three of us to complete the work. Despite this setback, we persevered and dedicated ourselves to the task at hand, ultimately producing a finished product that represented our best efforts.
              </Card.Text>
              <Button variant="primary" href="https://angi-adema.github.io/Movie-Finder/">~Click here for the link~</Button>
              </Accordion>
            </Card.Body>
          </Card>
          <Card className='project-card'>
            <Card.Img src={document} />
            <Card.Body>
              <Card.Title>Veggiebook</Card.Title>
              <Accordion>
              <Card.Text>
                This was my second project! We were designin a social media app that would act like a mix between a farmers market, and a social media app more so like Facebook, or Craigslist. Our intention was to inspire people to go local and buy from local farmers. We had 4 people in our group, and we all worked together to make this project a success.
              </Card.Text>
              <Button variant="primary" href="https://hidden-lake-21615.herokuapp.com">~Click here for the link~</Button>
              </Accordion>
            </Card.Body>
          </Card>
         
        </Row>
      </Container>
    </>
  );
};

export default Portfolio;


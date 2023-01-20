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
                This was the first of many projects I have worked on. It was a simple.
              </Card.Text>
              <Button variant="primary" href="https://joshdelmonte.github.io/Preliminary-Sample-Web-Development/" >~Click here for the link~</Button>
            </Card.Body>
          </Card>
          <Card className='project-card'>
            <Card.Img src={sampleWeb} />
            <Card.Body>
              <Card.Title>Movie Finder</Card.Title>
              <Card.Text>
                This was my first project! It was a simple movie finder app that uses the OMDB API. We had started with 5 people, and it was a time when
                people wer starting to drop the class, and we had lost 2 of our team mates. The three of us that stayed gave our best effort to finish.
              </Card.Text>
              <Button variant="primary" href="https://angi-adema.github.io/Movie-Finder/">~Click here for the link~</Button>
            </Card.Body>
          </Card>
          <Card className='project-card'>
            <Card.Img src={document} />
            <Card.Body>
              <Card.Title>Veggiebook</Card.Title>
              <Card.Text>
                This was my second project! We were designin a social media app that would act like a mix between a farmers market, and a social media app more so like Facebook, or Craigslist. Our intention was to inspire people to go local and buy from local farmers. We had 4 people in our group, and we all worked together to make this project a success.
              </Card.Text>
              <Button variant="primary" href="https://hidden-lake-21615.herokuapp.com">~Click here for the link~</Button>
            </Card.Body>
          </Card>
         
        </Row>
      </Container>
    </>
  );
};

export default Portfolio;


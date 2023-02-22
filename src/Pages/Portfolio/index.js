import React from 'react';
import {
  Container,
  Row,
  Button,
  Card,
  Carousel
} from 'react-bootstrap';
import sampleWeb from '../../Assets/images/Previous-additions.png';
import firstPortfolio from '../../Assets/images/firstPortfolio.png';
import movieFinder from '../../Assets/images/movie-finder.png';
import veggiebook from '../../Assets/images/VeggieBook.png';
// import document from '../../Assets/images/document-image.jpg';
import './style.css';


const Portfolio = () => {

  return (
    <>

      <Container className="display-flex">
        <Row className="d-flex flex-wrap justify-content-center">
          <Carousel>
            <Carousel.Item alt="First slide">
              <Card className='project-card' style={{ margin: 5 }}>
                <Card.Img src={sampleWeb} className="samplecard" fluid alt='...' />
                <Card.Body>
                  <Card.Title>Sample Web Development</Card.Title>
                  <Card.Text>
                    This was the first of many projects I have worked on. It was a simple.
                  </Card.Text>
                  <Button variant="primary" href="https://joshdelmonte.github.io/Preliminary-Sample-Web-Development/" >~Click here for the link~</Button>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item alt="Second slide">
              <Card className='project-card' style={{ margin: 5 }}>
                <Card.Img src={firstPortfolio} />
                <Card.Body>
                  <Card.Title>First Portfolio</Card.Title>
                  <Card.Text>
                    This was my first portfolio. It was a simple portfolio that I created to showcase my work. I used HTML, CSS and Bootstrap to create this portfolio.
                  </Card.Text>
                  <Button variant="primary" href="https://joshdelmonte.github.io/Monte-s-Portfolio/">~Click here for the link~</Button>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item alt="Third slide">
              <Card className='project-card' style={{ margin: 5 }}>
                <Card.Img src={movieFinder} className="samplecard" fluid alt='...' />
                <Card.Body>
                  <Card.Title>Movie Finder</Card.Title>
                  <Card.Text>
                    As a novice project, I developed a movie finder app that utilizes the OMDB API. Initially, our team consisted of five members; however, as the project progressed, several classmates withdrew, leaving only three of us to complete the work. Despite this setback, we persevered and dedicated ourselves to the task at hand, ultimately producing a finished product that represented our best efforts.
                  </Card.Text>
                  <Button variant="primary" href="https://angi-adema.github.io/Movie-Finder/">~Click here for the link~</Button>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item alt="Fourth slide">
              <Card className='project-card' style={{ margin: 5 }} >
                <Card.Img src={veggiebook} />
                <Card.Body>
                  <Card.Title>Veggiebook</Card.Title>
                  <Card.Text>
                    This was my second project! We were designin a social media app that would act like a mix between a farmers market, and a social media app more so like Facebook, or Craigslist. Our intention was to inspire people to go local and buy from local farmers. We had 4 people in our group, and we all worked together to make this project a success.
                  </Card.Text>

                  <Button variant="primary" href="https://hidden-lake-21615.herokuapp.com">~Click here for the link~</Button>
                </Card.Body>
              </Card>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    </>
  );
};

export default Portfolio;


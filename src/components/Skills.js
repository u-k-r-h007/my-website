import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>I have rated my self on the technologies i have worked on please go through it 
                I have worked on React.js, Node.js, Express.js, Tailwind css, Bootstrap, AWS, Git, JavaScript, MongoDB, MySql etc. 
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="image" />
                  <h5>React.js</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="image" />
                  <h5>Express.js</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="image" />
                  <h5>Redux</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="image" />
                  <h5>Html</h5>
                </div><div className="item">
                  <img src={meter1} alt="image" />
                  <h5>Css</h5>
                </div><div className="item">
                  <img src={meter1} alt="image" />
                  <h5>Tailwind</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="image" />
                  <h5>MongoDB</h5>
                  
                </div>
                <div className="item">
                  <img src={meter2} alt="image" />
                  <h5>MySql</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="image" />
                  <h5>GIT</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="image" />
                  <h5>AWS</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Image"/>
    </section>
  );
};

export default Skills;

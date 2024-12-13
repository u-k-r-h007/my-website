import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import  ProjectCard  from "./Projectcard";
import projImg1 from "../assets/img/Notes.png";
import projImg2 from "../assets/img/burger.png";
import projImg3 from "../assets/img/shopping.png";
import projImg4 from "../assets/img/todo.png";
import projImg5 from "../assets/img/quote.png";
import projImg6 from "../assets/img/food.png";
import projImg7 from "../assets/img/music.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

 const Projects = () => {

  const projects = [
    {
      title: "Burger Wala",
      description: "Here you can purcahe the burdger with wide options.",
      imgUrl: projImg2,
    },
    {
      title: "Notes Application",
      description: "You can create your own notes pin them edit them and you have your own account.",
      imgUrl: projImg1,
    },
    {
      title: "Music App",
      description: "Here you can play the songs with all the functionality.",
      imgUrl: projImg7,
    },
    {
      title: "TODO List",
      description: "Simple todo app with logic skills implemented on it.",
      imgUrl: projImg4,
    },
    {
      title: "Quote Genrator",
      description: "On a click of a button it generatoes random quotes.",
      imgUrl: projImg5,
    },
    {
      title: "Shopping cart",
      description: "Implemented using redux toolkit you can add the items to your cart and purchase them.",
      imgUrl: projImg3,
    },
    {
      title: "Food Health Website",
      description: "A simple website design where you can have your customized healthy meals.",
      imgUrl: projImg6,
    },
  
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I have made many projects in my company like Cochlear,Ampere Scooter,RFront(E-Commerce),Crompton,Voyze. Now here are some of my self made projects</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
export default Projects
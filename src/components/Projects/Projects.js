import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import enchat from "../../Assets/Projects/enchat.png";
import mongodb from "../../Assets/Projects/mongodb.png";
import weatherapp from "../../Assets/Projects/weatherapp.png";
import portscan from "../../Assets/Projects/portscan.png";
import chattolog from "../../Assets/Projects/chattolog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={enchat}
              title="ENChat"
              description="A Stream panel for Twitch streamers and viewers with responsive design, where you can see the viewers who are subscribed (sub, resub, gifts), read the chat and more. You can also use it as a desktop program if you want."
              link="https://github.com/encoderpie/twitch-chat-tmijs"
              prevlink="https://encoderpie.github.io/twitch-chat-tmijs/"
              hasPrevlink={true}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherapp}
              title="ExpressJs Weather App (OpenWeatherMap API)"
              description="A weather app that displays in light or dark mode according to your browser preference."
              link="https://github.com/encoderpie/Express-Weather-App"
              prevlink="https://github.com/encoderpie/Express-Weather-App"
              hasPrevlink={false}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mongodb}
              title="ExpressJs & MongoDB"
              description="A simple MongoDB project built on NodeJs & ExpressJs that allows CRUD operations. (also with bootstrap)"
              link="https://github.com/encoderpie/Express-MongoDB"
              prevlink="https://expressjsmongodb.herokuapp.com/"
              hasPrevlink={true}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portscan}
              title="Port Scanner with Python"
              description="An advanced and beautifully designed Port Scanner Tool"
              link="https://github.com/encoderpie/PortScanner"
              prevlink="https://github.com/encoderpie/PortScanner"
              hasPrevlink={false}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chattolog}
              title="Twitch Chat to Console & Txt"
              description="A simple script that prints the Twitch streaming chat to the console and keeps logs of the chat."
              link="https://github.com/encoderpie/twitch-chat-to-log-file"
              prevlink="https://github.com/encoderpie/twitch-chat-to-log-file"
              hasPrevlink={false}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

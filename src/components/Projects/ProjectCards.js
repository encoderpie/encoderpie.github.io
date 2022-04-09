import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal, BiWindow } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="outline-danger" href={props.link} target="_blank">
          <BiLinkExternal /> &nbsp;
          View Project
        </Button>
        {" "}
        <Button variant="outline-danger" href={props.prevlink} target="_blank">
          <BiWindow /> &nbsp;
          {props.hasPrevlink ? "View Preview" : "View Github"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;

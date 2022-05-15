import React from "react";
import { Button,Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Cards = ({movie}) => {
    console.log('movie',movie)
  return (
    <div>
      <h1>Cards</h1>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.imgUrl} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
            {movie.description}
          </Card.Text>0
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;

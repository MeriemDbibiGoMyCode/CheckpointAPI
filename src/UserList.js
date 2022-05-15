import React from "react";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Cards = ({ user }) => {
  console.log("user", user);
  return (
    <div>
      <h1>List Of User</h1>
      <Card>
        <Card.Header>{user.name}</Card.Header>
        <Card.Body>
          <Card.Title>{user.phone}</Card.Title>
          <Card.Text>{user.email}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;

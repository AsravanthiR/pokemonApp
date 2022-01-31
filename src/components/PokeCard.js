import Button from "react-bootstrap/Button";
import React from "react";
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";

const PokeCard = ({ name, image, pokemonName }) => {
  return (
    <Card bg="dark" text="light" key={name}>
      <Card.Header>{name}</Card.Header>

      <Card.Body>
        <Card.Img variant="top" src={image} />

        <LinkContainer to={`/${pokemonName}`}>
          <Button variant="secondary" size="sm">
            Small button
          </Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

export default PokeCard;

import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Services= ( ) => {
  return (
    <CardDeck>
      <Card>
        <CardImg top width="100%" src="./images/1.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">MONTHLY</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">$ 25</CardSubtitle>
          <CardText>Gym +  Fitness </CardText>
          <Button>Buy Now</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="./images/2.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="./images/3.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default Services;
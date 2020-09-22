import React from "react";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import './Contacts.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Contacts = () => {
  return (
    <div className="container text-center">
    <Row>
    <Col xs={12}>
   <CardDeck>
  <Card>
    <Card.Img variant="top" src="https://cdn.dribbble.com/users/2520294/screenshots/7269423/media/8db02365a1363822ae9f0554cf3d4469.gif" />
  
    <Card.Body>
      <Card.Title>CEO & FOUNDER </Card.Title>
      <Card.Text>
       Day-brightener, Fraud-fighter, Customer-BFF and who keeps our money in his pocket.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      
    </Card.Footer>
    

  </Card>
  <Card>
    <Card.Img variant="top" src="https://thumbs.gfycat.com/IllegalSleepyAtlanticridleyturtle-size_restricted.gif" />
    <Card.Body>
      <Card.Title>TROUBLE-SHOOTER</Card.Title>
      <Card.Text>
        Product Architect, trouble maker and who solves our every issues single-handedly.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://fuertedevelopers.com/assets/img/projects/graphicdesigningfeature.gif" />
    <Card.Body>
      <Card.Title>DESIGN GURU</Card.Title>
      <Card.Text>
        Sweet-talker, Data-nerd, Event-expert, Brand-builder and our lead lady.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      
    </Card.Footer>
  </Card>
</CardDeck> </Col>
</Row>
    </div>
  );
};

export default Contacts;

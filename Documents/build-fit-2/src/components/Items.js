import React from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'reactstrap';


function Items() {
    return (
        <div>
            <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (

               <Col>
                 <Card >
                   <CardImg style={{backgroundColor: "blue"}} variant="top" src="holder.js/100px160" />
                   <CardBody>
                     <CardTitle>Card title</CardTitle>
                     <CardText style={{backgroundColor: "lightblue"}}>
                       This is a longer card with supporting text below as a natural
                       lead-in to additional content. This content is a little bit longer.
                     </CardText>
                   </CardBody>
                 </Card>
               </Col>
               ))}
              </Row>
            
        </div>
    )
}

export default Items






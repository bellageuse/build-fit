import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import bgimage from 'images';

 
const Header = ( ) => {
  return (
    <div>
      <Jumbotron style={{
      backgroundColor: "dodgerBlue",
      backgroundImage: "url(/bgimmage.jpg)",
      height: "300px",
      backgroundRepeat: "no-repeat"
    }} >
        <h1 className="display-3 ">Welcome to our gym!</h1>
        <p className="lead">This is the place where you will find yourself in a better form than you were before</p>
    
        <p>You want to see our trainings or diets?</p>
        <p className="lead">
        <Button variant="outline-dark">See More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Header ;


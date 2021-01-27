import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import {Link, Linkto, BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Projects = () => {
    return <div style={{display : 'flex',
                        flexDirection : 'row',
                        
                        justifyContent : "space-evenly"
                       }}><Card style={{ width: '18rem',
                       boxShadow : '10px 12px #aaaaaa',
                       border : '5px groove white',
                        margin : '15px'
                         }}>
    <Card.Img variant="top" src="https://i.postimg.cc/Yq7qY0rT/Screen-Shot-2020-12-17-at-7-31-57-PM.png" />
    <Card.Body>
      <Card.Title>cutHub</Card.Title>
      <Card.Text>
      cutHub provides an intuitive and highly functional interface that facilitates orders of any size across our network, 
      providing a solid foundation for our transactions and subsequently business. We mainly worked in the React framework 
      & the Chakra UI.
      </Card.Text>
     <Button onClick={() => {
        window.open('https://node-tations-2006.herokuapp.com/');
      }} variant="primary">Go to App</Button>
      <div>&nbsp;</div>
      <Button onClick={() => {
          window.open('https://www.youtube.com/watch?v=38iZ5bMlxBs');
      }} variant="primary">View Walkthrough</Button>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem',
  border : '6px groove white',
  boxShadow : '10px 12px #aaaaaa',
margin : '15px' }}>
  <Card.Img variant="top" style={{paddingTop : '13px',
                                
                                backgroundColor : '#5878af'}} src="https://i.postimg.cc/qMK59PYT/Screen-Shot-2021-01-26-at-11-59-17-AM.png" />
  <Card.Body>
    <Card.Title>Fitness Trac.kr</Card.Title>
    <Card.Text>
    An App created for the purpose of logging a user's exercise routines & activities, as well as allowing users who are logged in to see the other user’s routines & activities.
    </Card.Text>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
    
   <Button onClick={() => {
      window.open('https://gracious-easley-6c1ad3.netlify.app/');
    }} variant="primary">Go to App</Button>
    <div>&nbsp;</div>
    
  </Card.Body>
</Card>
<Card style={{ width: '18rem',
boxShadow : '10px 12px #aaaaaa',
border : '6px groove white',
margin : '15px' }}>
  <Card.Img variant="top" style={{paddingTop : '38px',
                                
                                backgroundColor : '#f69282'}} src="https://i.postimg.cc/nhvNQyYk/Screen-Shot-2021-01-26-at-12-08-01-PM.png" />
  <Card.Body>
    <Card.Title>South Bay Skates</Card.Title>
    <Card.Text>
    IN PROGRESS : Newly redesigned storefront for Los Angeles old school skateboarding icon, South Bay Skates. Will feature Stripe Integrated Payments for digital transactions.
    </Card.Text>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
    
   <Button onClick={() => {
      window.open('https://upbeat-booth-1a0245.netlify.app/southbayskates.html');
    }} variant="primary">Go to App</Button>
    <div>&nbsp;</div>
    
  </Card.Body>
</Card>

</div>

}

export default Projects;
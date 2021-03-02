import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Box,  Text, Image} from '@chakra-ui/react';
import { callApi } from '../api';
import {Link, Linkto, BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Projects = () => {
  const [productList, setProductList] = useState([{}]);
  console.log('products', productList);
  

  

  const fetchProducts = async () => {
		const config = {
			method: 'GET',
			path: '/products'
		};

		try {
      const products = await callApi(config);
      
			setProductList(products);
			return products;
		} catch (error) {
			console.error(error);
    }
  };
  
  useEffect(() => {
    fetchProducts();
    
  }, []);
  


    return (<><p style={{padding : '6px',
    fontFamily:'IBM Plex Mono, monospace',
    fontStyle : 'oblique',
    fontSize: '23px',
    letterSpacing : '2px',
    fontVariant: 'small-caps'}}>Featured Products:</p>
    
    
    
    
    <div style={{  
  height: 'fit-content',
  display: 'flex',
  width : '500px',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  flexWrap: 'nowrap',
  fontFamily: 'Marmelad sans-serif',
  color: '#333',
  
  overflowX: 'scroll',
  
                       }}>{productList.map( ({id, name , description, price, imageurl, inStock, useByDate, category }) => {
                        return ( 
                          <Box  ley={id} minWidth='300px' border='5px groove peru'>
                        <Text fontFamily='courier' letterSpacing='1px' fontSize='xl'>Name: <b>{name}</b></Text>
                      <Image borderRadius='20px' src={imageurl} />
                      <Text fontSize='l'>Description: {description}</Text>
                      <Text fontSize='l'>Price: ${price}/lb</Text>
                      <Text fontSize='l'>Category: {category}</Text>
                      <Text fontSize='l'>Use By Date: {useByDate}</Text>
                          </Box>
                        );
                      })}</div>
    <Card style={{ width: '18rem',
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


</>
    )
}

export default Projects;
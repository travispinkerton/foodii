import React, { useState, useEffect } from 'react';
import {Row, Col, Image, Container } from 'react-bootstrap';
import './Tech.css';
const Tech = () => {
    return (<Container id="tech" style={{display : 'flex',
    
    flexDirection : 'row',
    flexWrap : 'wrap',
    justifyContent : 'space-evenly',
    padding : '20px'}}>
        <Row >
          <Col xs={6} md={4} >
            <Image style={{paddingBottom : '0px',
                           paddingTop : '35px',}}src="https://i.postimg.cc/CKB6Y9rY/javascript-logo-resized.png" rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image  style={{paddingBottom : '0px',
            
                           paddingTop : '15px'}} src="https://i.postimg.cc/FzZTDvzb/react-logo-resized.png" rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image style={{paddingBottom : '40px',
                           paddingTop : '5px'}} src="https://i.postimg.cc/DzLdxhYW/jquery-logo.png" roundedCircle />
          </Col>
          <Col xs={6} md={4}>
            <Image src="https://i.postimg.cc/d1TXm3zz/postgresql-card.png" rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image src="https://i.postimg.cc/6qVBcYkJ/node-js-icon.png" rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image src="https://i.postimg.cc/Y0xwYjFt/css.png" rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image src="https://i.postimg.cc/MGj2t9BP/HTML5-1-Color-Black.png" rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image src="https://i.postimg.cc/63NScttq/bootstrap.png" rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image src="https://i.postimg.cc/Qd1Jb5tg/Axios-logo-RGB-minimum-space1.jpg" roundedCircle />
          </Col>
          <Col xs={6} md={4}>
            <Image style={{paddingTop : '13px',
         }} src="https://i.postimg.cc/Wzqk4Lqm/git-logo-100533164-small.jpg" rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image src="https://i.postimg.cc/2SwvbQTV/bulma-logo.png" rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image style={{paddingTop : '10px'}} src="https://i.postimg.cc/jSxyz1pT/chakra-ui-logo.png" rounded />
          </Col>
          
        </Row>
      </Container>)
}

export default Tech;
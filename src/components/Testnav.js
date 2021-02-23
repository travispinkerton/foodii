import React, { useState, useEffect } from 'react';
import { Center } from '@chakra-ui/react';
import {Link, Linkto, BrowserRouter as Router} from 'react-router-dom';

import './header.css';
const Nav = () => {
    return (<section id="title" class="hero is-small is-primary is-bold">
    <div class="hero-body">
      <div class="header-nav">
      <i class="fas fa-home" style={{fontSize : '40px',
                                    color : 'white'}}></i>
                                    
      <i class="fas fa-shopping-cart" style={{fontSize : '40px',
                                    color : 'white'}}></i>

          <p style={{color : 'white',
                     fontWeight : 'bolder',
                     fontSize : '40px',
                     display : 'flex',
                     justifyContent : 'center'}}>Food 4 Less</p>
          
        <div class='produce'><img src="https://www.bigy.com/Media/Default/Produce/fruitVeggies2.jpg"></img></div>

        
        <Center id='banner' bg="tomato" h="100px" color="white" onClick={(event) => {
            event.preventDefault(); 
            console.log('clicked');
        }}>
          <Router>
  <div id='welcome' ><p style={{fontSize : '24px',
            fontFamily: 'Bodoni Moda',
            fontVariant : 'small-caps'}}>Welcome to my page! &nbsp;&nbsp;</p></div>
  <Link onClick={() => {
    window.open('https://github.com/travispinkerton')
  }}><a><img class="FB" src="https://i.postimg.cc/Bv0f206n/githublogo.png"></img></a></Link>
  <Link onClick={() => {
    window.open('https://www.linkedin.com/in/traviswremington/')
  }}><a><img class="linkedin" src="https://i.postimg.cc/nr9CCDTW/linkedinlogo.png"></img></a></Link>
  


  <Link onClick={() => {
    window.open('mailto:traviswremington@gmail.com');
  }}>
  <p style={{fontSize : '25px'
            }}>&nbsp;<i class="fas fa-envelope-square fa-2x"></i>&nbsp;&nbsp;</p>
  </Link>
          </Router>

<p id='email' style={{fontSize : '25px',
          fontStyle : 'oblique',
          fontVariant : 'small-caps'}}>traviswremington@gmail.com</p>
          

</Center>
        <h2 class="subtitle">
          PORTFOLIO
        </h2>
      </div>
    </div>
  </section>)

}


export default Nav;
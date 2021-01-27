import React, { useState, useEffect } from 'react';
import { Center } from '@chakra-ui/react';
import {Link, Linkto, BrowserRouter as Router} from 'react-router-dom';

import './header.css';
const Nav = () => {
    return (<section id="title" class="hero is-small is-dark is-bold">
    <div class="hero-body">
      <div class="header-nav">
          <div style={{border: '7px double white',
          borderRadius : '50%',
          height: '79px',
          color: 'white',
        width : '79px',
        
        display : 'flex',
        paddingTop: '21px',
        paddingRight: '5px',
        paddingLeft: '9px',
        letterSpacing: '4px',
        borderLeftColor: '#95dfe3',
        borderRightColor: '#c095e3',
        flexDirection : 'row',
        backgroundColor : 'black'}}>
              T<p style={{color : '#fff384'}}>W</p>R
          </div>
        <h1 class="title">
          Travis William Remington
          
        </h1>
        <Center bg="tomato" h="100px" color="white" onClick={(event) => {
            event.preventDefault(); 
            console.log('clicked');
        }}>
          <Router>
  <p style={{fontSize : '26px',
            fontFamily: 'Bodoni Moda',
            fontVariant : 'small-caps'}}>Welcome to my page! &nbsp;&nbsp;</p>
  <Link onClick={() => {
    window.open('https://github.com/travispinkerton')
  }}><a><img class="FB" src="https://i.postimg.cc/Bv0f206n/githublogo.png"></img></a></Link>
  <Link onClick={() => {
    window.open('https://www.linkedin.com/in/traviswremington/')
  }}><a><img class="linkedin" src="https://i.postimg.cc/nr9CCDTW/linkedinlogo.png"></img></a></Link>
  


  </Router>
  <p style={{fontSize : '25px'
            }}>&nbsp;<i class="fas fa-envelope-square fa-2x"></i>&nbsp;&nbsp;</p>

<p style={{fontSize : '25px',
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
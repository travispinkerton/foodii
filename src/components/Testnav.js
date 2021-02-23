import React, { useState, useEffect } from 'react';
import { Center, InputGroup, Input, IconButton, Button, InputRightAddon} from '@chakra-ui/react';
// import { FaSearch } from 'react-icons/fa';
import {Link, Linkto, BrowserRouter as Router} from 'react-router-dom';

import './header.css';
import { createBootstrapComponent } from 'react-bootstrap/esm/ThemeProvider';

const handleSubmit = async event => {
  event.preventDefault();
};

const Nav = ({filterValue, setFilterValue}) => {
    

    return (<section id="title" class="hero is-link is-bold">
    <div class="hero">
      <div class="header-nav">
      <div class="icons"><i class="fas fa-home" style={{fontSize : '40px',
                                    color : 'white'}}></i>
                                    
      <i class="fas fa-shopping-cart" style={{fontSize : '40px',
                                    color : 'white'}}></i></div>

          <p style={{color : 'black',
                     fontWeight : 'bolder',
                     fontSize : '40px',
                     display : 'flex',
                     justifyContent : 'center'}}>Food 4 Less</p>
          
        <div class='produce'><img src="https://www.bigy.com/Media/Default/Produce/fruitVeggies2.jpg"></img></div>
        <InputGroup>
				<Input
          display='flex'
          flexDirection='row'
          alignContent='center'
					backgroundColor='white'
					fontFamily='IBM Plex Mono, monospace'
					className='searchBar'
					color='black'
					placeholder='Search Food 4 Less...'
					width='350px'
					// marginLeft='250px'
					
					value={filterValue}
					onChange={e => setFilterValue(e.target.value)}
				></Input>
				<InputRightAddon>
					<IconButton color='black' icon={<i class="fas fa-search"></i>} onClick={handleSubmit} />
				</InputRightAddon>
			</InputGroup>
        
        <Center id='banner' bg="peru" h="50px" color="white" onClick={(event) => {
            event.preventDefault(); 
            console.log('clicked');
        }}>
          <Router>
  <div id='welcome' ><p style={{fontSize : '16px',
            color: 'black',
            fontWeight: 'bold',
            fontFamily: 'Bodoni Moda',
            fontVariant : 'small-caps'}}> Yes, I want <u>FREE DELIVERY</u> on my order <Button color='black'>Get PRO!</Button> &nbsp;&nbsp;</p></div>
  
          </Router>
        </Center>
        <img class='disrupt'src='https://i.postimg.cc/J4trGksN/Screen-Shot-2021-02-22-at-11-54-56-PM.png'></img>
        
      </div>
    </div>
  </section>)

}


export default Nav;
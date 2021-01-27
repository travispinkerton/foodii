import React, { useState, useEffect } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import './header.css';


const Summary = () => {
    return (<footer class="footer">
      <span style={{ display : 'flex',
      fontVariant : 'small-caps',
      fontFamily: 'Bodoni Moda',
                    flexDirection : 'row',
                    fontSize : '30px',
                    fontWeight : '900pt',
                    justifyContent : 'center'}}>CONTACT</span>
                    <Router>
                      <div style={{display : 'flex',
                                    flexDirection : 'row',
                                    justifyContent : 'center'}}>
      <Link onClick={() => {
    window.open('https://github.com/travispinkerton')
  }}><a><img class="FB" src="https://i.postimg.cc/Bv0f206n/githublogo.png"></img></a></Link>
  <Link onClick={() => {
    window.open('https://www.linkedin.com/in/traviswremington/')
  }}><a><img class="linkedin" src="https://i.postimg.cc/nr9CCDTW/linkedinlogo.png"></img></a></Link>
  <p style={{fontSize : '25px'
            }}>&nbsp;<i class="fas fa-envelope-square fa-2x"></i>&nbsp;&nbsp;</p>
  </div>
  </Router>
  
    <div class="content has-text-centered">
    
    &nbsp;
    &nbsp;
    <b><i class="fas fa-map-marker"></i>&nbsp;&nbsp;San Luis Obispo, CA</b>
    &nbsp;
    &nbsp;
    <b><a href=" mailtto: traviswremington@gmail.com"><p style={{fontSize : '25px',
          fontStyle : 'oblique',
          fontVariant : 'small-caps'}}>traviswremington@gmail.com</p></a></b>
      <p>
        
        <p>Designed using: <b>Chakra, Bulma, React, React-Bootstrap</b></p>
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
        is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
      </p>
    </div>
  </footer>)
  
};


export default Summary; 
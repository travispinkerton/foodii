import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import './header.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {
//   getSomething
// } from '../api';

const Header = () => {
  // const [message, setMessage] = useState('');

  // useEffect(() => {
  //   getSomething()
  //     .then(response => {
  //       setMessage(response.message);
  //     })
  //     .catch(error => {
  //       setMessage(error.message);
  //     });
  // });
    return (<>
      <span style={{display : 'flex',
                    flexDirection : 'row',
                    fontSize : '30px',
                    justifyContent : 'center',
                    fontVariant : 'small-caps',
                    fontWeight : '900pt',
                    fontFamily: 'Bodoni Moda'}}>My Photography</span>
                    &nbsp;&nbsp;
                  
    <div style={{paddingBottom : '70px',
                maxHeight : 'fit-content',
                
                }}id="images">
                  
    <Carousel className='carousel'>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/sxK6fzp6/resized.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Cambria, Ca</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/139862375_10218760873154527_8357542909009644553_o.jpg?_nc_cat=108&ccb=2&_nc_sid=e3f864&_nc_ohc=xXFFiDC8HjUAX_1auXr&_nc_ht=scontent-sjc3-1.xx&oh=ad04547c89fd21d11443777af0dd9263&oe=6034C93D"
          alt="Third slide"
        />
        <Carousel.Caption>
        <h3>Cambria, Ca</h3>
        <p>Bosley</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/gJ171XwH/IMG-0056.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          &nbsp;&nbsp;
          <h3 style={{            color : 'black',
                                  fontWeight : 'bolder',
                                  paddingTop : '5px'}}>Cambia, Ca</h3>
          <p><i style={{color : 'black'}} class="fas fa-water"></i>

</p>
         
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/4xhYTjFv/IMG-9424.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Morro Bay, Ca</h3>
          <p>Sunset near the Embarcadero</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/rwhr8S8c/IMG-0053.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Cambria, Ca</h3>
          <p>Bosley </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/ZnL7WYTk/IMG-0084.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Cambria, Ca</h3>
          <p>Bosley</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/wTG444PY/ollie.jpg"
          alt="Third slide"
        />
        <Carousel.Caption style={{color : 'black',
                                  fontWeight : 'bolder'}}> 
          <h3>Oliver Remington</h3>
          <p>My 2 year old son <i class="fas fa-heart"></i>

</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/gcVbLpnt/IMG-8978.jpg"
          alt="Third slide"
        />
        <Carousel.Caption style={{color : 'white'}}> 
          <h3>Gonzales, Ca</h3>
          


        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/c1gVynqn/IMG-9228.jpg"
          alt="Third slide"
        />
        <Carousel.Caption style={{color : 'white'}}> 
          <h3>Salmon Creek, CA</h3>
          


        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/Wpkffcrm/IMG-9991.jpg"
          alt="Third slide"
        />
        <Carousel.Caption style={{color : 'white'}}> 
          <h3>Montaña De Oro, CA</h3>
          


        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/HnnWdsgL/IMG-9240.jpg"
          alt="Third slide"
        />
        <Carousel.Caption style={{color : 'white'}}> 
          <h3>Salmon Creek, CA</h3>
          


        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/pXZNqtbG/IMG-8739.jpg"
          alt="Third slide"
        />
        <Carousel.Caption style={{color : 'white'}}> 
          <h3>Santa Barbara, CA</h3>
          


        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/zBSp88k4/IMG-9224.jpg"
          alt="Third slide"
        />
        <Carousel.Caption style={{color : 'white'}}> 
          <h3>San Simeon, CA</h3>
          


        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </>
    )
}
    
  


export default Header;
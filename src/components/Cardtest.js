import React, { useState, useEffect } from 'react';
import { AspectRatio, Container, GridItem } from '@chakra-ui/react'
import './Tech.css';
// Sample card from Airbnb

// const property = {
//     imageUrl: "https://bit.ly/2Z4KKcF",
//     imageAlt: "Rear view of modern home with pool",
//     beds: 3,
//     baths: 2,
//     title: "Modern home in city center in the heart of historic Los Angeles",
//     formattedPrice: "$1,900.00",
//     reviewCount: 34,
//     rating: 4,
// }

const AirbnbExample = () => {
    
  return (<>
  
  
    <div style={{margin : '0 auto',
    
  border : '3px'}}>
  <span><p style={{display : 'flex',
                    flexDirection : 'row',
                    fontSize : '30px',
                    justifyContent : 'center',
                    fontVariant : 'small-caps',
                    fontWeight : '900pt',
                    fontFamily: 'Bodoni Moda'}}>cutHub Walkthrough</p></span>
  <center><AspectRatio  style={{marginBottom : '30px',
  
  
display : 'flex',
flexDirection : 'row',
justifyContent : 'center'}} maxW="680px" height="500px" ratio={2}>
    
  <iframe
  
    style={{border : '12px groove peru',
            
            borderRadius: '10%',
            margin : 'auto',
          
        padding : '3px'}}
    title="naruto"
    src="https://www.youtube.com/embed/38iZ5bMlxBs"
    allowFullScreen
  />
</AspectRatio></center>

<p style={{ display : 'flex',
      fontFamily: 'Abril Fatface, cursive',
                    flexDirection : 'row',
                    fontSize : '30px',
                    fontWeight : '300pt',
                    justifyContent : 'center'}}>My Home!</p></div>
<AspectRatio id="maps" ratio={16 / 9}>

<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d52117.556456524064!2d-120.70540551088614!3d35.2724910045086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1611617405351!5m2!1sen!2sus" width="600" height="450" frameborder="0" style={{height : '600px', border: "0"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
</AspectRatio>


</>

)
    
};

export default AirbnbExample;
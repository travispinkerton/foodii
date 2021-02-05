import React, { useState, useEffect } from 'react';
import { Grid, Box, GridItem } from '@chakra-ui/react'
import './Tech.css';

const Boxes = () => {
    return (<>
        <Grid
        style={{marginBottom : '135px'}}
        h="200px"
        
        templateRows="repeat(2, 1fr)"
        
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem style={{boxShadow : '10px 12px #aaaaaa'}} rowSpan={2} colSpan={1} bg="tomato" />
        
        <GridItem style={{boxShadow : '10px 12px #aaaaaa'}}  colSpan={2} bg="papayawhip" /><b style={{fontWeight : 'bold',
        
      fontFamily: 'Bodoni Moda'}}>Full Stack web application developer with over 11 years of professional experience in delivering precise results with an impeccable attention to detail, 
  even under demanding circumstances. Seeking position that will utilize technical skills, unwavering work ethic and strong interpersonal skills.</b><GridItem/>
        <GridItem style={{boxShadow : '10px 12px #aaaaaa'}}  colSpan={2} bg="papayawhip" />
        <GridItem style={{boxShadow : '10px 12px #aaaaaa'}}  colSpan={4} bg="tomato" />
      </Grid>
      
    
 
      </>)
}

export default Boxes;
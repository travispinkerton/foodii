import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Summary from './components/Summary';
import Testnav from './components/Testnav';
import Boxes from './components/Boxes';
import AirbnbExample from './components/Cardtest';
import { ChakraProvider } from "@chakra-ui/react";
import  Bulmaspin  from './components/Bulmaspin';
import  Projects  from './components/Projects';
import Tech from './components/Tech'

// import 'bootstrap/dist/css/bootstrap.min.css';
// import {
//   App
// } from './components';

// import { getCurrentUser, getCurrentUserToken, getCart } from './auth';

const App = () => {
  // const [message, setMessage] = useState('');
  // const [token, setToken] = useState(getCurrentUserToken(), []);
	// const [currentUser, setCurrentUser] = useState(getCurrentUser());
	const [orders, setOrders] = useState([{}]);
	// const [cart, setCart] = useState(getCart());
	const [filterValue, setFilterValue] = useState('');
  

  // useEffect(() => {
  //   getSomething()
  //     .then(response => {
  //       setMessage(response.message);
  //     })
  //     .catch(error => {
  //       setMessage(error.message);
  //     });
  // });

  return (
    <div className="App" id='App' >
      <Testnav
      setFilterValue={setFilterValue}
      filterValue={filterValue}
      />
      
      <Projects 
      	// setCart={setCart}
        // cart={cart}
        />
      &nbsp;
      <Boxes/>
      
      <Tech/>
      <Bulmaspin/>
      
      
      
      <AirbnbExample/>
      
      <Header/>
      <Summary/>
    </div>
  );
}

ReactDOM.render(
  <ChakraProvider>
  <App />
  </ChakraProvider>,
  document.getElementById('root')
);
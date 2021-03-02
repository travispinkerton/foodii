import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Summary from './components/Summary';
import Testnav from './components/Testnav';
import Boxes from './components/Boxes';
import Orders from './components/Orders';
// import MyOrders from './components/MyOrders';
import ShoppingCart from './components/Cart';
import AirbnbExample from './components/Cardtest';
import { ChakraProvider } from "@chakra-ui/react";
import  Bulmaspin  from './components/Bulmaspin';
import  Projects  from './components/Projects';
import Tech from './components/Tech'

// import 'bootstrap/dist/css/bootstrap.min.css';
// import {
//   App
// } from './components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { getCurrentUser, getCurrentUserToken, getCart } from './auth';

const App = () => {
  const [message, setMessage] = useState('');
  const [token, setToken] = useState(getCurrentUserToken(), []);
	const [currentUser, setCurrentUser] = useState(getCurrentUser());
	const [orders, setOrders] = useState([{}]);
	const [cart, setCart] = useState(getCart());
	const [filterValue, setFilterValue] = useState('');
  

  // useEffect(() => {
  //   getSomething()
  //     .then(response => {
  //       setMessage(response.message);
  //     })
  //     .catch(error => 
  //       setMessage(error.message);
  //     });
  // });

  return (
    <div className="App" id='App' >
      <Router>
      <Testnav
      currentUser={currentUser}
      setCurrentUser={setCurrentUser}
      token={token}
      setToken={setToken}
      setFilterValue={setFilterValue}
      filterValue={filterValue}
      />
      
      {/* <Route exact path='/myorders'>
							<Orders
								currentUser={currentUser}
								orders={orders}
								setOrders={setOrders}
								token={token}
							/>
						</Route>
						<Route exact path='/cart'>
							<ShoppingCart
								token={token}
								setCart={setCart}
								cart={cart}
							/>
						</Route> */}
            
      
      <Projects 
      	// setCart={setCart}
        // cart={cart}
        />
      &nbsp;
      </Router>
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
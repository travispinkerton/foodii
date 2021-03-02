import React, { useState, useEffect } from 'react';
import ImageUploader from 'react-images-upload';
import { loadStripe } from '@stripe/stripe-js';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

import { callApi } from '../api';
import {
	Grid,
	Heading,
	Input,
	InputGroup,
	InputRightAddon,
	IconButton,
	Button,
	FormLabel,
	useDisclosure,
	ModalCloseButton,
	Modal,
	ModalOverlay,
	ModalContent,
	Tabs,
	Tab,
	TabList,
	TabPanels,
	TabPanel,
  useToast,
  Center
} from '@chakra-ui/react';
// import { FaSearch } from 'react-icons/fa';
import {Link, Linkto, BrowserRouter as Router} from 'react-router-dom';
import {
	storeCurrentUser,
	storeCurrentUserToken,
	clearCurrentUser,
	clearCurrentUserToken
} from '../auth';
import './header.css';
import { createBootstrapComponent } from 'react-bootstrap/esm/ThemeProvider';
const stripePromise = loadStripe('pk_test_51IQNPhGd6WVeGvcuiDi3qFdBzL4DT8DFgNQ6tXJk7J33F2duE7FQ1wwoiLkRV2V9zmzl0v8u3iohHtZT8MTrummw00kO4R0zfc');

class Login extends React.Component {
 
  constructor(props) {
      super(props);
       this.state = { pictures: [] };
       this.onDrop = this.onDrop.bind(this);
  }

  onDrop(picture) {
      this.setState({
          pictures: this.state.pictures.concat(picture),
      });
      
  }

  render() {
      return (
          <ImageUploader
              withIcon={true}
              buttonText='Choose images'
              onChange={this.onDrop}
              
              
              imgExtension={['.jpg', '.gif', '.png', '.gif']}
              maxFileSize={5242880}
          />
      );
  }
}


const Nav = ({filterValue, setFilterValue, token, setToken, currentUser, setCurrentUser}) => {

  const handleClick = async (event) => {
    // Get Stripe.js instance
    const stripe = await stripePromise;

    // Call your backend to create the Checkout Session
    const response = await fetch('/create-checkout-session', { method: 'POST' });

    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
  };
  
  const handleRegisterSubmit = async event => {
    event.preventDefault();
    try {
      const registration = await callApi(
        { method: 'post', path: '/users/register' },
        {
          firstname: firstname,
          lastname: lastname,
          email: email,
          address: address,
          imageURL : imageURL,
          username: username,
          password: password
        }
      );
  
      if (!registration.success) {
        toast({
          title: registration.message,
          status: 'success',
          duration: '5000',
          isClosable: 'true',
          position: 'top'
        });
      }
      console.log(registration);
      if (registration.newUser && registration.token) {
        storeCurrentUser(registration.newUser);
        setCurrentUser(registration.newUser);
        storeCurrentUserToken(registration.token);
        setToken(registration.token);
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleSubmitLogin = async event => {
    event.preventDefault();
    console.log(username);
    console.log(password);
    try {
      const login = await callApi(
        { method: 'post', path: '/users/login' },
        { username: username, password: password }
      );
  
      if (!login.success) {
        toast({
          title: login.message,
          status: 'error',
          duration: '5000',
          isClosable: 'true',
          position: 'top'
        });
      }
      if (login.token && login.user) {
        setCurrentUser(login.user);
        storeCurrentUser(login.user);
        setToken(login.token);
        storeCurrentUserToken(login.token);
  
        toast({
          title: login.message,
          status: 'success',
          duration: '5000',
          isClosable: 'true',
          position: 'top'
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleUserLogout = () => {
    clearCurrentUser();
    clearCurrentUserToken();
    setCurrentUser(null);
    setToken(null);
  };
  

  const [searchQuery, setSearchQuery] = useState('');
	const [firstname, setFirstName] = useState('');
	const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [imageURL, setImage] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
    
    

    return (<section id="title" class="hero is-link is-bold">
    <div class="hero">
      <div class="header-nav">
      <div class="icons"><i class="fas fa-home" style={{fontSize : '40px',
                                    color : 'white'}}></i>
      <div style={{border: '7px double white',
          borderRadius : '50%',
          height: '79px',
          color: 'white',
        width : '79px',
     
        display : 'flex',
        paddingTop: '21px',
        paddingRight: '5px',
        paddingLeft: '9px',
        letterSpacing: '2px',
        borderLeftColor: '#95dfe3',
        borderRightColor: '#c095e3',
        flexDirection : 'row',
        
        backgroundColor : 'black'}}>
              <p style={{color : 'yellowgreen',
                        paddingRight : '25px',
                        fontSize : '18px'}}>foodii</p>
          </div>  
          
    <button role="link" onClick={handleClick}>
      Checkout
      <i class="fas fa-shopping-cart" style={{fontSize : '40px',
                                    color : 'white'}}></i>
    </button>
                 
      </div>
                                    <Router>
        {token && currentUser ? (
				<Link to='/'>
					<Button variant='outline' onClick={handleUserLogout}>
						Logout
					</Button>
				</Link>
			) : (
				<Button variant='outline' onClick={onOpen}>
					Login
				</Button>
			)}
      </Router>
          <Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<Tabs>
						<TabList>
							<Tab>Register</Tab>
							<Tab>Login</Tab>
						</TabList>
						<TabPanels>
							<TabPanel>
								<form onSubmit={handleRegisterSubmit}>
									<FormLabel>Username</FormLabel>
									<Input
										type='text'
										placeholder='enter username'
										value={username}
										onChange={e => {
											setUsername(e.target.value);
										}}
									/>
									<FormLabel>Password</FormLabel>
									<Input
										type='password'
										placeholder='enter password'
										value={password}
										onChange={e => {
											setPassword(e.target.value);
										}}
									/>
									<FormLabel>First Name</FormLabel>
									<Input
										type='text'
										placeholder='Enter First Name'
										value={firstname}
										onChange={e => {
											setFirstName(e.target.value);
										}}
									/>
									<FormLabel>Last Name</FormLabel>
									<Input
										type='text'
										placeholder='Enter Last Name'
										value={lastname}
										onChange={e => {
											setLastName(e.target.value);
										}}
									/>
									<FormLabel>Email</FormLabel>
                  
									<Input
										type='text'
										placeholder='Enter Email'
										value={email}
										onChange={e => {
											setEmail(e.target.value);
										}}
									/>
                  
                  <FormLabel>Home Address</FormLabel>
									<Input
                
										type='text'
										placeholder='Enter Address'
										value={address}
										onChange={e => {
											setAddress(e.target.value);
                    }}
                    
									/>
                    <FormLabel>Profile Picture</FormLabel>
                    <Login/>
                    {/* <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={setImage}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            /> */}
									{/* <Input
										type='image'
										placeholder='Upload Photo'
										value={imageURL}
										onChange={e => {
											setImage(e.target.value);
                    }}
                    
									/> */}
									<Button type='submit' onClick={onClose}>
										Submit
									</Button>
								</form>
							</TabPanel>
							<TabPanel>
								<form onSubmit={handleSubmitLogin}>
									<FormLabel>Username</FormLabel>
									<Input
										type='text'
										placeholder='enter username'
										value={username}
										onChange={e => {
											setUsername(e.target.value);
										}}
									/>
									<FormLabel>Password</FormLabel>
									<Input
										type='password'
										placeholder='enter password'
										value={password}
										onChange={e => {
											setPassword(e.target.value);
										}}
									/>
									<Button type='submit' onClick={onClose}>
										Submit
									</Button>
								</form>
							</TabPanel>
						</TabPanels>
					</Tabs>
					<ModalCloseButton />
				</ModalContent>
			</Modal>              

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
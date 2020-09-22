import React, { useState } from 'react';
import './Header.css'
import Logo from '../../images/Logo.png'
import fakeData from '../../fakeData/fakeData';
import { Button, FormControl } from '@material-ui/core';
import { Form, Nav, Navbar } from 'react-bootstrap';
import Home from '../Home/Home';
import { Link } from 'react-router-dom';


const Header = () => {
    console.log(fakeData)

    return (
       
            <div className="header" >
                <Navbar className="navbarr" bg="transparent" expand="lg">
                        <Navbar.Brand href="/home"><img className="travel-logo" src={Logo} alt="travel-logo"></img></Navbar.Brand>
                        <Form inline>
                                <FormControl  style={{color: 'white'}} type="text" placeholder="Search Your Destination" className="mr-sm-2" />
                                <Button style={{color: 'white',backgroundColor: 'transparent',border: '1px solid grey'}}>Search Your Destination</Button>
                            </Form>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                           
                            <Nav className="mr-auto title">
                            </Nav>
                            
                               <Nav.Link style={{color: 'white'}} href="/news">News</Nav.Link>
                                <Nav.Link style={{color: 'white'}}href="/destination">Destination</Nav.Link>
                                <Nav.Link style={{color: 'white'}}href="/blog">Blog</Nav.Link>
                                <Nav.Link style={{color: 'white'}} href="/contact">Contact</Nav.Link>
                            <Link to="/login"><Button style={{fontWeight:'bold',backgroundColor: '#F9A51A',width: '104px',height: '44px',borderRadius: '5px',padding: '12px 29px'}}>Login</Button></Link>
                            
                            
                        </Navbar.Collapse>
                    </Navbar>
                    <div class="container">
                    <div class="row travel-place-cards">
                            <div style={{color: 'white'}} class="col-xl-3 col-md-4 col-sm-12">
                                <h1 style={{fontWeight:'bold', fontSize: 25}}>Bangladesh</h1>
                                <p>A land of mystery and intrigue being centuries old, discover its many mysteries for yourself. Perhaps one of the most popular activities of stunning yourself on the exquisite white sandy beaches of Cox’s Bazaar and Teknaaf. Bangladesh’s other attraction is a bit more lively – the Royal Bengal Tigers which have become somewhat of a trademark for the country. These stunning big cats are somewhat protected in the country and are stunning to behold!</p>
                                <Button style={{backgroundColor: '#F9A51A',width: '150px',height: '44px',borderRadius: '5px',padding: '12px 29px'}}>Book Now</Button>
                            </div>
                         <div class="col-xl-9 col-md-8 col-sm-12">
                            {
                                fakeData.map(place=> <Home place={place} ></Home>)
                            } 

                            </div>
                      </div>

                    </div>
               
            </div>

        
            
                
             
      
    );
};

export default Header;
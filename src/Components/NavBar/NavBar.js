import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { UserContext } from '../../App';
import './NavBar.css';
import Logo from '../../images/Logo.png'


const NavBar = () => {

    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);

    return (
        <div className='header-light-nav'>
        <Navbar className="navbar" style={{maxHeight:'10px', padding: '30px', margin:'10px'}} bg="transparent" expand="lg">
        <Navbar.Brand href="/home"><img className="travel-guru-logo" style={{backgroundColor: 'white',height:'50px',width:'100px'}} src={Logo} alt="travel-guru-logo"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
      
            </Nav>
            <Nav.Link style={{color: 'black'}} href="/news">News</Nav.Link>
            <Nav.Link style={{color: 'black'}} href="/destination">Destination</Nav.Link>
            <Nav.Link style={{color: 'black'}} href="/blog">Blog</Nav.Link>
            <Nav.Link style={{color: 'black'}} href="/contact">Contact</Nav.Link>
            <Nav.Link style={{color: 'black', fontWeight:'bold'}} href="#">{loggedInUser.name}</Nav.Link>
        </Navbar.Collapse>
    </Navbar>
            
        </div>
    );
};

export default NavBar;
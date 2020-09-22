import React, { createContext, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';

import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Link, 
} from "react-router-dom";
import PlaceDetail from './Components/PlaceDetail/PlaceDetail';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import HotelDetails from './Components/HotelDetails/HotelDetails';
import News from "./Components/News/News";
import Blog from "./Components/Blog/Blog";
import Contacts from "./Components/Contacts/Contacts";
import Destination from './Components/Destination/Destination';

export const MyContext = createContext();




export const UserContext= createContext();
export const PlaceContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  const [place,setPlace] = useState({});

  return (
    <div className="App">
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <PlaceContext.Provider value ={[place,setPlace]}>

      
    
    <Router>
     
     <Switch>
           <Route path="/login">
             <Login></Login> 
           </Route>

           <Route path="/home">
           <Header></Header>
           </Route>

          <Route path="/news" component={News}>
            <News></News>
          </Route>

          <Route path="/destination">
            <Destination></Destination>
          </Route>
          
          <Route path="/blog" component={Blog}>
            <Blog></Blog>
          </Route>

          <Route path="/contact" component={Contacts}>
            <Contacts></Contacts>
          </Route>

           <Route path="/placeDetails/:placeId">
             <PlaceDetail></PlaceDetail>  
           </Route>
           
           <PrivateRoute path="/hotelDetails">
             <HotelDetails></HotelDetails>
            </PrivateRoute>
            
           
           <Route exact path="/">
              <Header></Header>
           </Route>
           <Route path="*">
              <p>Error</p>
           </Route>
       </Switch>
     
   </Router>
      </PlaceContext.Provider>
      </UserContext.Provider>

    </div>

    
  );
}

export default App;

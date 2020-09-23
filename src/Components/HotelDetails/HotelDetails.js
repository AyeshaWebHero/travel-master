import React, { useContext } from 'react';
import NavBar from '../NavBar/NavBar';
import './HotelDetails.css'
import room1 from '../../images/location/room1.png';
import room2 from '../../images/location/room2.png';
import room3 from '../../images/location/room3.png';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import fakeData from '../../fakeData/fakeData';
import hotelData from '../../hotelData/hotelData'
import HotelRooms from '../HotelRooms/HotelRooms';
import Col from 'react-bootstrap/Col';
import { PlaceContext } from '../../App';


const HotelDetails = (name) => {

    
    const [place,setPlace] = useContext(PlaceContext);

    const placeArray = fakeData.filter(plc => parseInt(plc.key) === parseInt(place))

    console.log(placeArray)

    
    return (
        <section className="row book-room">
           
             <div style={{ width:'70%',  margin:'auto'}}>
             <NavBar></NavBar>
            <hr></hr>

             <h1 style={{textAlign:'center'}}>Rooms Available {placeArray[0]?.name}</h1>

            <div className="row room-details">
            <Row>
                <div className="col-6 col-md-6">
                {
                    hotelData.map((hotel=> <HotelRooms hotel={hotel}></HotelRooms>))
                }
                </div>
            </Row>
                <div className="col-6 col-md-6" style={{ height: '400px', width: '100%' }}>
                </div>
                
                
            </div>
            <hr></hr>

             </div>
           
             
        </section>
    );
};

export default HotelDetails;
import React from 'react';
import star from '../../images/Icon/star_1_.png';
import './HotelRooms.css';

const HotelRooms = (props) => {

    const {title,capacity,type,cancellation,rating,rate,img} = props.hotel;


    return (
        <section >
            
             <div className="row room-details" >
                    <div className="col-6"> 
                    <img className="room" src={img} alt='hotel-room'></img> 
                    </div>
                    <div className="col-6" style={{textAlign:'right'}}> 
                    <h4>{title}</h4>{capacity}|{type}|{cancellation}
                    <p style={{textAlign:'right'}}> ${rate}/day | <img src={star} alt='star'></img> {rating}(30) </p>
                    </div> 
                </div>
               
            
        </section>
    );
};

export default HotelRooms;
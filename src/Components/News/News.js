import React from "react";
import {Player} from 'video-react';
import '@goongmaps/goong-geocoder-react/dist/goong-geocoder.css'
import { ControlBar } from 'video-react';



const News = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 5 }}>Wait for the most interesting news related travelling.(in progress)</h1>
      <Player src="http://media.w3.org/2010/05/bunny/movie.mp4" autoPlay>
     
     </Player>
      
    </div>
  );
};

export default News;

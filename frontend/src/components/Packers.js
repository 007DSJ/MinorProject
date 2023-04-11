import React from 'react';
import image from '../imgs/IMG2.jpeg';
import image2 from '../imgs/IMG3.jpeg';
import image3 from '../imgs/IMG4.jpeg';
import Searchbar from './Searchbar'
// import Services from "./Services";
// import Data from './Data.json';
import '../App.css';

function Packers() {

  return (
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">

      <div className='merge'>
        <div className='searchBox'>
          <Searchbar placeholder='From*'/>
          <Searchbar placeholder='To*'/>
        </div>
        <div>
        <a href="/services"><button id='but' type="button" class="btn btn-danger" href='/services'>Submit</button></a>
        </div>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={image} alt="Logo" width="100%" height="500px" />
        </div>
        <div class="carousel-item">
          <img src={image2} alt="img2" width="100%" height="500px" />
        </div>
        <div class="carousel-item">
          <img src={image3} alt="img2" width="100%" height="500px" />
        </div>
      </div>

    </div>

  )
}

export default Packers;
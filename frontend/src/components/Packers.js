import React from 'react';
import image from '../imgs/IMG2.jpeg';
import image2 from '../imgs/IMG3.jpeg';
import image3 from '../imgs/IMG4.jpeg';

function Packers() {
  return (
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
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
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Packers;
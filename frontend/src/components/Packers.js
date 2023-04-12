import React from 'react';
import image from '../imgs/IMG2.jpeg';
import image2 from '../imgs/IMG3.jpeg';
import image3 from '../imgs/IMG4.jpeg';
import Searchbar from './Searchbar';
import '../App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Packers() {
  const navigate = useNavigate();
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/services?origin=${origin}&destination=${destination}`)
  }

  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className='merge'>
        <div className='searchBox'>
          <Searchbar placeholder='From' setOrigin={setOrigin} setDestination={setDestination} num='1' />
          <Searchbar placeholder='To' setOrigin={setOrigin} setDestination={setDestination} num='2' />
        </div>
        <div>
          <a href="/services"><button id='but' type="button" className="btn btn-danger" onClick={handleSubmit}>Submit</button></a>
        </div>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={image} alt="Logo" width="100%" height="500px" />
        </div>
        <div className="carousel-item">
          <img src={image2} alt="img2" width="100%" height="500px" />
        </div>
        <div className="carousel-item">
          <img src={image3} alt="img2" width="100%" height="500px" />
        </div>
      </div>
    </div>
  )
}

export default Packers;
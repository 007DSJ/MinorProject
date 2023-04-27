import React from 'react';
import Searchbar from './Searchbar';
import '../App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Packers() {
  const navigate = useNavigate();
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [originstate, setOriginstate] = useState('');
  const [destinationstate, setDestinationstate] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/services?origin=${origin}&destination=${destination}`)
  }

  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className='merge'>
        <div className='searchBox'>
          <Searchbar placeholder='From' setValue={setOriginstate} value={originstate} setCode={setOrigin} />
          <Searchbar placeholder='To' setValue={setDestinationstate} value={destinationstate} setCode={setDestination} />
        </div>
        <div>
          <a href="/services"><button id='but' type="button" className="btn btn-danger" onClick={handleSubmit}>Submit</button></a>
        </div>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">

          <img src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="Logo" width="100%" height="500px" />
        </div>
        <div className="carousel-item">
          <img src="https://images.unsplash.com/photo-1562811950-41d4a4944a4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="img2" width="100%" height="500px" />
        </div>
        <div className="carousel-item">
          <img src="https://images.unsplash.com/photo-1610853165086-2d50fed290b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="img3" width="100%" height="500px" />
        </div>
      </div>
    </div>
  )
}

export default Packers;
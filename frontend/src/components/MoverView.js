import React, { useEffect, useState } from 'react';
import '../App.css'
import axios from 'axios';
import { useParams } from 'react-router';
import BookMover from './BookMover';
import authService from '../services/authService';
import { Navigate } from 'react-router';

function MoverView(props) {
  const [mover, setMover] = useState({});
  const params = useParams();
  const id = params.id;
  const params2 = new URLSearchParams(window.location.search);
  const origin = params2.get('origin');
  const destination = params2.get('destination');
  const user = authService.getCurrentUser();

  const fetchMover = async () => {
    try {
      const response = await axios.get(`/movers/${id}`);
      setMover(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchMover();
  }, [])

  if (!user) {
    return <Navigate to={'/login'} />
  }

  return (
    <div className="flex-container">
      <div className="flex-child magenta">
        <div>
          <img src={mover.img} alt="MoverImg" />
          <h3>{mover.name}</h3>
          <div className="rating">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <span>Rating : </span>
            <span className="fa fa-star checked" id="rating"></span>
            <span className="fa fa-star checked" id="rating"></span>
            <span className="fa fa-star checked" id="rating"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </div>

          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <link rel='script' href='https://kit.fontawesome.com/a076d05399.js'></link>
          <button className="btn"><i className='fa fa-phone'> +91-8340584265</i></button> <br />
          <button className="btn"><i className='fa fa-map-marker'> Plot No 1, Khandagiri</i></button> <br />
          <button className="btn"><i className="fa fa-clock-o"></i> Availability : Open from 9am to 12am</button> <br />
          <button id='bookMover' type="button" data-bs-toggle="modal" data-bs-target="#bookmover">Book Mover <i className='fa fa-truck' /></button>

          <BookMover
            origin={origin}
            destination={destination}
          />

        </div>
      </div>

      <div className="flex-child green">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://cdn.pixabay.com/photo/2021/04/12/08/10/coffee-6171744_960_720.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/1.webp" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/1.webp" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className='viewerBody'>
          <h5>{mover.description}</h5>
          <h5>{props.phoneNo}</h5>
          <h5>{props.available}</h5>
        </div>
      </div>
    </div>
  )
}

export default MoverView;
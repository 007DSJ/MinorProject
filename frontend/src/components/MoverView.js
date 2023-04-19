import React from 'react';
import '../App.css'

function MoverView(props) {
  return (
    
    <div class="flex-container">
        <div class="flex-child magenta">
            <div>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/1.webp" alt="MoverImg" />
                <h3>{props.name}</h3>
                <div class="rating">
                  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                  <span>Rating : </span>
                  <span class="fa fa-star checked" id="rating"></span>
                  <span class="fa fa-star checked" id="rating"></span>
                  <span class="fa fa-star checked" id="rating"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </div>
        
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <link rel='script' href='https://kit.fontawesome.com/a076d05399.js'></link>
                <button class="btn"><i class='fa fa-phone'> +91-8340584265</i></button> <br />
                <button class="btn"><i class='fa fa-map-marker'> Plot No 1, Khandagiri</i></button> <br />
                <button class="btn"><i class="fa fa-clock-o"></i> Availability : Open from 9am to 12am</button> <br />
                <button id='bookMover'>Book Mover <i class='fa fa-truck'></i></button>
        
              </div>
        </div>
        
        <div class="flex-child green">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://cdn.pixabay.com/photo/2021/04/12/08/10/coffee-6171744_960_720.jpg" class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/1.webp" class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/1.webp" class="d-block w-100" alt="..."/>
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
              <div class='viewerBody'>
                <h5>{props.description}</h5>
                <h5>{props.phoneNo}</h5>
                <h5>{props.available}</h5>
                <h5></h5>
              </div>
            </div>
        </div>     
  )
}

export default MoverView;
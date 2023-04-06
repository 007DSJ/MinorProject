import React from 'react';
import img1 from '../imgs/spImg1.jpg'
import img2 from '../imgs/spImg2.jpg'
import img3 from '../imgs/spImg3.jpg'
import img4 from '../imgs/spImg4.jpeg'
import img5 from '../imgs/spImg5.jpg'
import '../App.css'


export const Servicep = (props) => {

  return (
         <div>
          <div class="card mb-3 mt-3 ms-3 me-3">
        <div class="row g-0">
          <div class="col-md-4 d-flex flex-row">
            <img src={props.img} alt="..."/>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{props.name}</h5>
              <p class="card-text">{props.desc}</p>
              <button type="button" class="btn btn-primary">View</button>
            </div>
              <div class="rating">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
              <span>Rating : </span>
              <span class="fa fa-star checked" id="rating"></span>
              <span class="fa fa-star checked" id="rating"></span>
              <span class="fa fa-star checked" id="rating"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              </div>
          </div>
        </div>
      </div>

<div class="card mb-3 mt-3 ms-3 me-3">
<div class="row g-0">
  <div class="col-md-4 d-flex flex-row">
    <img src={img2} alt="..."/>
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <button type="button" class="btn btn-primary">Primary</button>
    </div>
  </div>
</div>
</div>


        <div class="card mb-3 mt-3 ms-3 me-3">
        <div class="row g-0">
          <div class="col-md-4 flex-fill">
            <img src={img3} alt="..."/>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <button type="button" class="btn btn-primary">Primary</button>
            </div>
          </div>
        </div>
        </div>
  
  </div>

  )
}

export default Servicep;
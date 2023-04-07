import React from "react";

function MoverCard(props) {
    return (
        <div class="card mb-3 mt-3 ms-3 me-3">
            <div class="row g-0">
                <div class="col-md-4 d-flex flex-row">
                    <img src={props.img} alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{props.name}</h5>
                        <p class="card-text">{props.desc}</p>
                        <button type="button" class="btn btn-primary">View</button>
                    </div>
                    <div class="rating">
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
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
    )
}

export default MoverCard;
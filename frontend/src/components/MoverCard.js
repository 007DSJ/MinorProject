import React from "react";
import { useNavigate } from "react-router";
import authService from "../services/authService";
import "../App.css";

function MoverCard(props) {
    const navigate = useNavigate();
    const isLoggedIn = authService.getCurrentUser();

    function handleClick(e) {
        e.preventDefault();
        navigate(`/services/${props.id}?origin=${props.origin}&destination=${props.destination}`)
    }

    return (

        <div class="card mb-3 mt-3 ms-3 me-3">
            <div class="row g-0">
                <div class="col-md-4 d-flex flex-row">
                    <img className="moverImage" src={props.img} alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.desc}</p>
                        {isLoggedIn && <button type="button" className="btn btn-primary" onClick={handleClick}>View</button>}
                    </div>
                    <div className="rating">
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

                        {/* <span> &nbsp;&nbsp;&nbsp;Rating : </span>
                        <span className="fa fa-star checked" id="rating"></span>
                        <span className="fa fa-star checked" id="rating"></span>
                        <span className="fa fa-star checked" id="rating"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span> */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoverCard;
import React, { useState } from "react";
import Box from "./Box";
import axios from "axios";

function BookMover(props) {
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [confirmation, setConfirmation] = useState("")
    const token = process.env.REACT_APP_MAPBOX_TOKEN;

    function calculateCost(dist) {
        const cost = dist * 100;
        return cost;
    }

    async function handleClick(e) {
        e.preventDefault();
        try {
            const originResponse = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${origin}.json?types=place&access_token=${token}`);
            const destinationResponse = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${destination}.json?types=place&access_token=${token}`)
            const coordinates = String(originResponse.data.features[0].geometry.coordinates[0]) + ',' + String(originResponse.data.features[0].geometry.coordinates[1]) + ';' + String(destinationResponse.data.features[0].geometry.coordinates[0]) + ',' + String(destinationResponse.data.features[0].geometry.coordinates[1])
            const distanceResponse = await axios.get(`https://api.mapbox.com/directions/v5/mapbox/driving/${coordinates}?&access_token=${token}`);
            const cost = calculateCost(distanceResponse.data.routes[0].distance / 1000.0)
            setConfirmation(`The estimated cost for moving from ${origin} to ${destination} is ₹${cost}. If you confirm the order, our team will contact you shortly.`);
        } catch (err) {
            console.log(err)
            setConfirmation("Something went wrong, please check back later")
        }
    }

    async function handleConfirm(e) {
        e.preventDefault();
        axios.get('/mail')
    }

    return (
        <div>
            <div className="modal fade" id="bookmover" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Provide us some details</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="col-6 offset-3">
                                <div className="mb-3">
                                    <label className="form-label" for="origin">Origin</label>
                                    <div id="origin" className="origin">
                                        <Box
                                            states={props.origin}
                                            key={1}
                                            searchTerm={origin}
                                            setSearchTerm={setOrigin}
                                            placeholder="Origin city"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" for="password">Destination</label>
                                    <Box
                                        states={props.destination}
                                        key={2}
                                        searchTerm={destination}
                                        setSearchTerm={setDestination}
                                        placeholder="Destination city"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleClick} data-bs-target="#confirmOrder" data-bs-toggle="modal">Book</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="confirmOrder" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">Confirmation</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            {confirmation}
                        </div>
                        <div class="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button class="btn btn-success" data-bs-dismiss="modal" onClick={handleConfirm}>Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookMover;
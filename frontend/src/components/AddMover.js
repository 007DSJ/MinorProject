import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function AddMover() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState("");
    let navigate = useNavigate();

    function handleName(e) {
        setName(e.target.value);
    }

    function handleDescription(e) {
        setDescription(e.target.value);
    }

    function handleUrl(e) {
        setUrl(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const result = {
            name: name,
            description: description,
            img: url
        };
        const response = await axios.post('/movers', result);
        console.log(response);
        navigate('/services');
    }

    return (<div>
        <div className="row">
            <h1 className="text-center">Add a new mover!</h1>
            <div className="col-6 offset-3">
                <form className="needs-validation" onSubmit={handleSubmit} encType="multipart/form-data" noValidate>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="title">Mover Name</label>
                        <input className="form-control" type="text" onChange={handleName} value={name} id="title" required />
                        <div className="invalid-feedback">Enter mover name</div>
                    </div>
                    <div class="mb-3">
                        <label className="form-label" htmlFor="description">Description</label>
                        <input className="form-control" type="text" onChange={handleDescription} value={description} id="description" required />
                        <div className="invalid-feedback">Enter mover description</div>
                    </div>
                    <div class="mb-3">
                        <label className="form-label" htmlFor="url">Image Link</label>
                        <input className="form-control" type="text" onChange={handleUrl} value={url} id="url" required />
                        <div className="invalid-feedback">Image Link</div>
                    </div>
                    <button className="btn btn-success" type="submit">Submit!</button>
                </form>
                <a className="btn btn-primary mt-3" href="/">Back to Home Page</a>
            </div>
        </div>
    </div>);
}

export default AddMover;
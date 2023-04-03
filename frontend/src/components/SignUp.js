import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";

function SignUp() {

    const [username, setUserame] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    let navigate = useNavigate();

    function handleUsername(e) {
        setUserame(e.target.value);
    }
    function handlePassword(e) {
        setPassword(e.target.value);
    }
    function handleEmail(e) {
        setEmail(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(username, password, email);
        const result = {
            username,
            password,
            email
        }
        axios.defaults.withCredentials = true;
        const response = await axios.post('/signup', result);
        await authService.login(username, password).then(
            () => {
                navigate('/');
                window.location.reload();
            },
            error => {
                console.log(error);
            }
        );
        navigate('/');
        window.location.reload();
    }

    return (<div><div className="row">
        <div className="col-6 offset-3">
            <h1 className="text-center">Sign Up</h1>
            <form action="/signup" className="needs-validation" noValidate method="POST" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="username">Username</label>
                    <input className="form-control" type="text" name="username" id="username" required autoFocus onChange={handleUsername} />
                    <div className="invalid-feedback">Enter Username</div>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input className="form-control" type="email" name="email" id="email" required onChange={handleEmail} />
                    <div className="invalid-feedback">Enter email</div>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="password">Password</label>
                    <input className="form-control" type="password" name="password" id="password" required onChange={handlePassword} />
                    <div className="invalid-feedback">Enter password</div>
                </div>
                <button className="btn btn-success">Sign Up</button>
            </form>
        </div>
    </div></div>);
}

export default SignUp;
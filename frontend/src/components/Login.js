import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";

function Login() {
    const formRef = useRef(null);
    const [username, setUserame] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();

    function handleUsername(e) {
        setUserame(e.target.value);
    }

    function handlePassword(e) {
        setPassword(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (formRef.current.checkValidity()) {
            authService.login(username, password).then(
                () => {
                    navigate('/');
                    window.location.reload();
                },
                error => {
                    console.log(error);
                }
            );
        } else {
            e.stopPropagation();
            formRef.current.classList.add('was-validated');
        }
    }

    return (<div><div className="row">
        <div className="col-6 offset-3">
            <h1 className="text-center">Log In</h1>
            <form action="/login" ref={formRef} className="needs-validation" noValidate method="POST" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="username">Username</label>
                    <input className="form-control" type="text" name="username" id="username" required autoFocus onChange={handleUsername} />
                    <div className="invalid-feedback">Enter Username</div>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="password">Password</label>
                    <input className="form-control" type="password" name="password" id="password" required onChange={handlePassword} />
                    <div className="invalid-feedback">Enter password</div>
                </div>
                <button className="btn btn-success mb-3">Sign In</button>
                <br />
                <a href="/signup">Don't have an account? Sign up here.</a>
            </form>
        </div>
    </div></div>)
}

export default Login;
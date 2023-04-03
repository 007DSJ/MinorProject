import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";

function Login() {

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
        authService.login(username, password).then(
            () => {
                navigate('/');
                window.location.reload();
            },
            error => {
                console.log(error);
            }
        );
    }

    return (<div><div class="row">
        <div class="col-6 offset-3">
            <h1 class="text-center">Sign In</h1>
            <form action="/login" class="needs-validation" noValidate method="POST" onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label class="form-label" for="username">Username</label>
                    <input class="form-control" type="text" name="username" id="username" required autoFocus onChange={handleUsername} />
                    <div class="invalid-feedback">Enter Username</div>
                </div>
                <div class="mb-3">
                    <label class="form-label" for="password">Password</label>
                    <input class="form-control" type="password" name="password" id="password" required onChange={handlePassword} />
                    <div class="invalid-feedback">Enter password</div>
                </div>
                <button class="btn btn-success mb-3">Sign In</button>
                <br />
                <a href="/signup">Don't have an account? Sign up here.</a>
            </form>
        </div>
    </div></div>)
}

export default Login;
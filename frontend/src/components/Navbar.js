import React from 'react'
import authService from "../services/authService";
import "../App";

function Navbar() {
  function handleLogOut(e) {
    e.preventDefault();
    authService.logout();
    window.location.reload();
    // console.log('logged out');
  }
  const token = authService.getCurrentUser();
  return (<div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Pack&Mov</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/services">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active">Disabled</a>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            {!token && (
              <li class="nav-but">
                <a id="green" class="btn btn-secondary" href="/signup">SignUp</a>
              </li>
            )}
            {!token && (
              <li class="nav-but">
                <a id="green" class="btn btn-success" href="/login">Login</a>
              </li>
            )}
            {token && (
              <li className="nav-item">
                <a className="nav-link" onClick={handleLogOut}>Logout</a>
              </li>

            )}
          </ul>
        </div>
      </div>
    </nav>
  </div>
  )
}
export default Navbar;
import React, { useEffect } from "react";
import authService from "../services/authService";

function Navbar() {
  function handleLogOut(e) {
    e.preventDefault();
    authService.logout();
    window.location.reload();
    // console.log('logged out');
  }
  const token = authService.getCurrentUser();
  return (<div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">P&M</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">All</a>
            </li>
            {!token && (
              <li className="nav-item">
                <a className="nav-link" href="/login">Login</a>
              </li>
            )}
            {token && (
              <li className="nav-item">
                <a className="nav-link" onClick={handleLogOut}>Logout</a>
              </li>
            )}
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>);
}

export default Navbar;
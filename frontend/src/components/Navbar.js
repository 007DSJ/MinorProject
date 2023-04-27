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
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Pack&Move</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/services">Services</a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" href="/">About Us</a>

            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {!token && (
              <li className="nav-but">
                <a className="btn btn-secondary" href="/signup">Sign Up</a>
              </li>
            )}
            {!token && (
              <li className="nav-but">
                <a className="btn btn-success" href="/login">Login</a>
              </li>
            )}
            {token && (
              <li className="nav-item">
                <a className="btn btn-danger" onClick={handleLogOut}>Logout</a>
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
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Services from './components/Services';
import AddMover from './components/AddMover';
import CheckOut from './components/CheckOut';
import MoverView from './components/MoverView';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<App />} />
        <Route path='services' element={<Services/>}/>
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='addmover' element={<AddMover />} />
        <Route path='checkout' element={<CheckOut />} />
        <Route path='services/:id' element={<MoverView/>} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);
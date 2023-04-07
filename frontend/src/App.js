import React from 'react';
import Navbar from './components/Navbar';
import Packers from './components/Packers';
import Carrier from './components/Carrier';
import Footer from './components/Footer';
import Servicep from './components/Services';
import './App.css';

function App() {
  return (
    <div className="App">
      <Packers />
      <Carrier />
    </div>
  );
}

export default App;
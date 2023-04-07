import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import MoverCard from './MoverCard';
import '../App.css'

function Services() {
  const [movers, setMovers] = useState([]);
  const navigate = useNavigate();


  function handleClick() {
    navigate('/addmover');
  }

  const fetchMovers = async () => {
    const response = await axios("/movers");
    setMovers(response.data);
    //console.log(response.data);
    //console.log(movers);
  }
  useEffect(() => {
    fetchMovers()
  }, [])
  return (<div className="container my-3">
    {movers.map((mover) => (
      <MoverCard
        name={mover.name}
        img={mover.img}
        desc={mover.description}
        key={mover._id}
        id={mover._id}
      />
    ))}
    <button className="btn btn-info" onClick={handleClick}>Add new</button>
  </div>)
}

export default Services;
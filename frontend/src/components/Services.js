import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MoverCard from './MoverCard';
import '../App.css'

function Services() {
  const [movers, setMovers] = useState([]);
  const params = new URLSearchParams(window.location.search);
  const origin = params.get('origin');
  const destination = params.get('destination');

  const fetchMovers = async () => {
    try {
      const response = await axios(`${process.env.REACT_APP_API}/movers`, { params: { origin, destination } });
      setMovers(response.data);
    } catch (err) {
      console.log(err);
    }
    //console.log(response.data);
    //console.log(movers);
  }
  useEffect(() => {
    fetchMovers()
  }, [origin, destination])
  return (<div className="container my-3">
    {movers.map((mover) => (
      <MoverCard
        name={mover.name}
        img={mover.img}
        desc={mover.description}
        key={mover._id}
        id={mover._id}
        origin={origin}
        destination={destination}
      />
    ))}
  </div>)
}

export default Services;
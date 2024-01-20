import './Dash.css'; // Make sure to import the CSS f
import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// Card component
import logo from './logo.svg';
import {Link} from 'react-router-dom';

const Card = ({ image, title, budget,listOfDesti, id }) => (
  <Link className="card" to={`/itinerary/${id}`}>
    <div className="card-image-container">
      <img src={`${title}.jpg`} alt={title} className="card-image" />
    </div>
    <div className="card-description">
      <h3 className="card-title">Iternary Title :  {title}</h3>
      <ul>

        <li>Budget : {budget}</li>
        <li>List of Destinations included :{listOfDesti} </li>
      </ul>
    </div>
  </Link>
);

// Dashboard component
const Dashboard = ({ cards }) => (
  // console.log()
  <div className="dashboard">
    {cards.map((card, index) => (
      <Card key={index} image={card.image} title={card.id} budget={card.title} listOfDesti={card.listOfDesti} id = {card.id}/>
    ))}
  </div>
);

// Main App component
const Iternaries = () => {
  const [cData, setcData] = useState([])
  
  useEffect(() => {
    console.log('Iternaries page is displayed');
    const fetchData = async () => {
      try {
        // Replace the following with your actual API endpoint
        const response = await fetch('http://localhost:3001/itinerary/1', {
          method:'GET', 
          headers:{
            apikey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2aGhpYXl1emtwc2p4dnp1dnZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU3MDg2MDksImV4cCI6MjAyMTI4NDYwOX0.cyhiinfoCYzCCx0IX6ns8Spcs2UOy7WR-W95aqHJqUE",
            Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2aGhpYXl1emtwc2p4dnp1dnZsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNTcwODYwOSwiZXhwIjoyMDIxMjg0NjA5fQ.eOaqXI8bq6KgtlC8m2WgMD3QllcWQJF2cFlN3mn1UxU"
          }
        });
        const data = await response.json();
        setcData(data.itinerary);
      } catch (error) {
        console.error('Error fetching claims:', error);
      }
    };

    fetchData();
    // console.log(cardsData);
    // console.log(localStorage.username)
  }, []);

  return (
    <div className="app">
      <div>
        <h1>My Iternaries</h1>
        <div>
          <Link className='add-button' to='./createIt'>Add New Itinerary</Link>
        </div>
      </div>
      
      <Dashboard cards={cData} />
    </div>
  );
};

export default Iternaries;
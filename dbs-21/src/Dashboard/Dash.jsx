import './Dash.css'; // Make sure to import the CSS f
import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// Card component
import logo from './logo.svg';
const Card = ({ image, title, budget,listOfDesti }) => (
  <div className="card" onClick={() => NavigationPreloadManager}>
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
  </div>
);

// Dashboard component
const Dashboard = ({ cards }) => (
  // console.log()
  <div className="dashboard">
    {cards.map((card, index) => (
      <Card key={index} image={card.image} title={card.title} budget={card.title} listOfDesti={card.listOfDesti}/>
    ))}
  </div>
);
const cardsData = [
  {
    image: 'e.jpg',
    title: 'Singapore',
    budget: '$50',
    listOfDesti: 'gardens by the bay, mbs',
  },
  {
    image: 'iternary2.jpg',
    title: 'Malaysia',
    budget: '$500',
    listOfDesti: 'gardens by the bay, mbs'
  },

  {
    image: 'iternary3.jpg',
    title: 'Thailand',
    budget: '$100',
    listOfDesti: 'gardens by the bay, mbs'
  },

  {
    image: 'iternary4.jpg',
    title: 'Phillipines',
    budget: '$40',
    listOfDesti: 'gardens by the bay, mbs'
  },

  {
    image: 'iternary5.jpg',
    title: 'Vietnam',
    budget: '$5',
    listOfDesti: 'gardens by the bay, mbs'
  },

  {
    image: 'iternary6.jpg',
    title: 'India',
    budget: '$7',
    listOfDesti: 'gardens by the bay, mbs'
  },
  // Add more cards as needed
];
// Main App component
const Iternaries = async() => {
  const [card, setCardData]=useState([]);

  
  
  return (
  <div className="app">
    <div className = 'header'>
      <h1>My Iternaries</h1> 
      <Link className = 'login-button' to="/CreateIt">Create New Itinerary</Link>
      <Link className = 'login-button' to="/CreateD">Create New Destination</Link>
    </div>

    <Dashboard cards={cardsData} />
  </div>
  )
  };

export default Iternaries;

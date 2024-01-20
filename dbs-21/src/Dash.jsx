import React from 'react';
import './Dash.css'; // Make sure to import the CSS f
// import { useNavigate } from 'react-router-dom';
// Card component
import logo from './logo.svg';
const Card = ({ image, title, budget,listOfDesti }) => (
  <div className="card" onClick={() => NavigationPreloadManager}>
    <div className="card-image-container">
      <img src={image} alt={title} className="card-image" />
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
  <div className="dashboard">
    {cards.map((card, index) => (
      <Card key={index} image={card.image} title={card.title} budget={card.title} listOfDesti={card.listOfDesti}/>
    ))}
  </div>
);

// Sample data for the dashboard
const cardsData = [
  {
    image: 'iternary1.jpg',
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
const Iternaries = () => (
  
  <div className="app">
    <h1>My Iternaries</h1>
    <Dashboard cards={cardsData} />
  </div>
);

export default Iternaries;

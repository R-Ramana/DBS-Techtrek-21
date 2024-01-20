import React from 'react';
import './App.css'; // Make sure to import the CSS file

// Card component
const Card = ({ image, title }) => (
  <div className="card">
    <div className="card-image-container">
      <img src={image} alt={title} className="card-image" />
    </div>
    <div className="card-description">
      <h3 className="card-title">{title}</h3>
    </div>
  </div>
);

// Dashboard component
const Dashboard = ({ cards }) => (
  <div className="dashboard">
    {cards.map((card, index) => (
      <Card key={index} image={card.image} title={card.title} />
    ))}
  </div>
);

// Sample data for the dashboard
const cardsData = [
  {
    image: 'iternary1.jpg',
    title: 'Singapore',
  },
  {
    image: 'iternary2.jpg',
    title: 'Malaysia',
  },

  {
    image: 'iternary3.jpg',
    title: 'Thailand',
  },

  {
    image: 'iternary4.jpg',
    title: 'Phillipines',
  },

  {
    image: 'iternary5.jpg',
    title: 'Vietnam',
  },

  {
    image: 'iternary6.jpg',
    title: 'India',
  },
  // Add more cards as needed
];

// Main App component
const App = () => (
  <div className="app">
    <Dashboard cards={cardsData} />
  </div>
);

export default App;

import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import NavBar from './Component/Navbar.jsx';
import CreateIt from './Dashboard/CreateIt.jsx';
import CreateD from './Dashboard/CreateD.jsx';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Iternaries from './Dashboard/Dash.jsx';
import Itinerary from './components/Itinerary';

import {useState, useEffect} from 'react'
function App() {
  const [itinerary,setItineraries] = useState({
    id:1,
    budget: 500,
    title: "Singapore Trip",
    destinations: [{
      id: 1,
      country_id: 1,
      cost:50,
      name: 'Marina Bay Sands',
      notes: 'Iconic hotel with an infinity pool and stunning views of the city skyline. Open 24/7.'
    },
    {
      id: 2,
      country_id: 1,
      cost:500,
      name: 'Gardens by the Bay',
      notes: 'Futuristic park featuring Supertree Grove and Flower Dome conservatories. Open daily from 9 AM to 9 PM.'
    },
    {
      id: 3,
      country_id: 1,
      cost:50,
      name: 'Sentosa Island',
      notes: 'Fun-filled island resort with beaches, theme parks, and various attractions. Open daily from 10 AM to 7 PM.'
    }
  ]
}
    )
    const deleteItinerary = (id) => {
      console.log(id)
    }
    const id = 1;
  return (
    <div className="App">
      <NavBar/>
        <Routes>
          <Route path = '/createIt' element = {<CreateIt/>}/>
          <Route path = '/createD' element = {<CreateD/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Iternaries/>} />
          <Route path="/itinerary" element={<Itinerary itinerary={itinerary}/>}/>
          <Route path = {`/itinerary/${id}`} element = {<Itinerary itinerary={itinerary}/>}/>
        </Routes>
  </div>
  );
}

export default App;

import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import NavBar from './Component/Navbar.jsx';
import CreateIt from './Dashboard/CreateIt.jsx';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Iternaries from './Dashboard/Dash.jsx';
import Itinerary from './components/Itinerary'

import {useState, useEffect} from 'react'
function App() {
    const deleteItinerary = (id) => {
      console.log(id)
    }

  return (
    <div className="App">
      <NavBar/>
        <Routes>
          <Route path = '/createIt' element = {<CreateIt/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Iternaries/>} />
        </Routes>
  </div>
  );
}

export default App;

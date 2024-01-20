import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import NavBar from './Component/Navbar.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Dashboard/>}/>
        </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;

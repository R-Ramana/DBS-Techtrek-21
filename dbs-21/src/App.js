import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import NavBar from './Component/Navbar.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';
import CreateIt from './Dashboard/CreateIt.jsx';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Iternaries from './Dash.jsx';

function App() {
  return (
    <div className="App">
      <NavBar/>
        <Routes>
          <Route path = '/' element = {<CreateIt/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/iternaries" element={<Iternaries/>} />
        </Routes>
  </div>
  );
}

export default App;

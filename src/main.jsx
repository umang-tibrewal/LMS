import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App.jsx";
import Signup from "./Pages/Signup.jsx";
import Login from './Pages/Login.jsx';
import About from './Pages/About.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './Pages/Contact.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route path="/About" element={<About />} />
    <Route path="/Contact" element={<Contact />} />
  
      </Routes>
    </Router>
  </React.StrictMode>
);
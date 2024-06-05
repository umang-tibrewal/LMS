import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App.jsx";
import Signup from "./Pages/Signup.jsx";
import Login from './Pages/Login.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
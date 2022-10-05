import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import UsersDetails from './components/UserDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'antd/dist/antd.min.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/:id" element={<UsersDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

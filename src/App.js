import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BirdList from './pages/BirdList'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/birds" element={<BirdList />} />
      </Routes>
    </Router>
  );
};

export default App;

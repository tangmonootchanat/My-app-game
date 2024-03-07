import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GamePage from '../views/pages/PageGames/GamePage';
import NavBra from "../views/component/NavBra";
import CountdownTimer from '../views/component/CountdownTimer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/GamePage" element={<GamePage />} />
        <Route path="/NavBra" element={<NavBra />} />
        <Route path="/CountdownTimer" element={<CountdownTimer />} />
      </Routes>
    </Router>
  );
}

export default App
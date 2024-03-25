import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homegame from "../views/pages/Home";
import GamePage from '../views/pages/PageGames/GamePage';
import CountdownTimer from '../views/component/navbar/CountdownTimer';
import SamplePage from "../views/pages/loding";
import SelectGame from "../views/pages/Select";

function App() {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<SamplePage />} /> 
       <Route path="/Homegame" element={<Homegame />} />
       <Route path="/Selectgame" element={<SelectGame/>} />
       <Route path="/GamePage/1" element={<GamePage />} />
       <Route path="/CountdownTimer" element={<CountdownTimer />} />
      </Routes>
    </Router>
  );
}

export default App
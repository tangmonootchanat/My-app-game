import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homegame from "../views/pages/Home";
import GamePage from '../views/pages/PageGames/GamePage';
import GamePage2 from '../views/pages/PageGames/GamePage2';
import GamePage3 from '../views/pages/PageGames/GamePage3';
import GamePage4 from '../views/pages/PageGames/GamePage4';
import GamePage5 from '../views/pages/PageGames/GamePage5';
import GamePage6 from '../views/pages/PageGames/GamePage6';
import GamePage7 from '../views/pages/PageGames/GamePage7';
import GamePage8 from '../views/pages/PageGames/GamePage8';
import GamePage9 from '../views/pages/PageGames/GamePage9';
import GamePage10 from '../views/pages/PageGames/GamePage10';
import GamePage11 from '../views/pages/PageGames/GamePage11';
import GamePage12 from '../views/pages/PageGames/GamePage12';
import GamePage13 from '../views/pages/PageGames/GamePage13';
import GamePage14 from '../views/pages/PageGames/GamePage14';
import GamePage15 from '../views/pages/PageGames/GamePage15';
import GamePage16 from '../views/pages/PageGames/GamePage16';
import GamePage17 from '../views/pages/PageGames/GamePage17';
import GamePage18 from '../views/pages/PageGames/GamePage18';
import GamePage19 from '../views/pages/PageGames/GamePage19';
import GamePage20 from '../views/pages/PageGames/GamePage20';
import GamePage21 from '../views/pages/PageGames/GamePage21';
import GamePage22 from '../views/pages/PageGames/GamePage22';
import GamePage23 from '../views/pages/PageGames/GamePage23';
import GamePage24 from '../views/pages/PageGames/GamePage24';
import GamePage25 from '../views/pages/PageGames/GamePage25';
import GamePage26 from '../views/pages/PageGames/GamePage26';
import GamePage27 from '../views/pages/PageGames/GamePage27';
import GamePage28 from '../views/pages/PageGames/GamePage28';
import GamePage29 from '../views/pages/PageGames/GamePage29';
import GamePage30 from '../views/pages/PageGames/GamePage30';
import CountdownTimer from '../views/component/navbar/CountdownTimer';
import SamplePage from "../views/pages/loding";
import SelectGame from "../views/pages/Select";
import TestModal from "../views/pages/PageGames/TestModal";

function App() {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<SamplePage />} /> 
       <Route path="/Homegame" element={<Homegame />} />
       <Route path="/Selectgame" element={<SelectGame/>} />
       <Route path="/GamePage/1" element={<GamePage />} />
       <Route path="/GamePage/2" element={<GamePage2 />} />
       <Route path="/GamePage/3" element={<GamePage3 />} />
       <Route path="/GamePage/4" element={<GamePage4 />} />
       <Route path="/GamePage/5" element={<GamePage5 />} />
       <Route path="/GamePage/6" element={<GamePage6 />} />
       <Route path="/GamePage/7" element={<GamePage7 />} />
       <Route path="/GamePage/8" element={<GamePage8 />} />
       <Route path="/GamePage/9" element={<GamePage9 />} />
       <Route path="/GamePage/10" element={<GamePage10 />} />
       <Route path="/GamePage/11" element={<GamePage11 />} />
       <Route path="/GamePage/12" element={<GamePage12 />} />
       <Route path="/GamePage/13" element={<GamePage13 />} />
       <Route path="/GamePage/14" element={<GamePage14 />} />
       <Route path="/GamePage/15" element={<GamePage15 />} />
       <Route path="/GamePage/16" element={<GamePage16 />} />
       <Route path="/GamePage/17" element={<GamePage17 />} />
       <Route path="/GamePage/18" element={<GamePage18 />} />
       <Route path="/GamePage/19" element={<GamePage19 />} />
       <Route path="/GamePage/20" element={<GamePage20 />} />
       <Route path="/GamePage/21" element={<GamePage21 />} />
       <Route path="/GamePage/22" element={<GamePage22 />} />
       <Route path="/GamePage/23" element={<GamePage23 />} />
       <Route path="/GamePage/24" element={<GamePage24 />} />
       <Route path="/GamePage/25" element={<GamePage25 />} />
       <Route path="/GamePage/26" element={<GamePage26 />} />
       <Route path="/GamePage/27" element={<GamePage27 />} />
       <Route path="/GamePage/28" element={<GamePage28 />} />
       <Route path="/GamePage/29" element={<GamePage29 />} />
       <Route path="/GamePage/30" element={<GamePage30 />} />
       <Route path="/CountdownTimer" element={<CountdownTimer />} />
       <Route path="/Test" element={<TestModal />} /> 
      </Routes>
    </Router>
  );
}

export default App
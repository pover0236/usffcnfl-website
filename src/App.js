import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/navbar.component';
import HomePage from './pages/homepage/homepage.component';
import Seminars from './pages/seminars/seminars.component';
import Unscheduled from './pages/unscheduled/unsched.component'
import OpenRisks from './pages/openrisks/openrisks.component';
import ClosedRisks from './pages/closedrisks/closedrisks.component';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='content'>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/seminars' element={<Seminars />} />
          <Route exact path='/unscheduled' element={<Unscheduled />} />
          <Route exact path='/openrisks' element={<OpenRisks />} />
          <Route exact path='/closedrisks' element={<ClosedRisks />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

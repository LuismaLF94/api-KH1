import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Characters from './components/Characters';
import KeyBlades from './components/KeyBlades';
import Heartless from './components/Heartless';
import Items from './components/Items';
import Worlds from './components/Worlds';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/keyblades" element={<KeyBlades />} />
          <Route path="/heartless" element={<Heartless />} />
          <Route path="/items" element={<Items />} />
          <Route path="/worlds" element={<Worlds />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

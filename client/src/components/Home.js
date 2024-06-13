import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <ul>
          <li><Link to="/characters">Characters</Link></li>
          <li><Link to="/keyblades">KeyBlades</Link></li>
          <li><Link to="/heartless">Heartless</Link></li>
          <li><Link to="/items">Items</Link></li>
          <li><Link to="/worlds">Worlds</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;

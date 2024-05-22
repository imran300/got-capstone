// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import CharactersPage from './pages/CharactersPage';
import CharacterDetailsPage from './pages/CharacterDetailsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Game of Thrones Fanpage</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/characters">Characters</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/characters" element={<CharactersPage />} />
            <Route path="/characters/:id" element={<CharacterDetailsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

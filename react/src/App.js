import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import EditExercisePage from './pages/EditExercisePage';
import CreateExercisePage from './pages/CreateExercisePage';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <header>
        <h1>Exercise Tracker</h1>
        <p>Track your exercise progress with our app!</p>
      </header>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/edit/:id" element={<EditExercisePage />} />
          <Route path="/create" element={<CreateExercisePage />} />
        </Routes>
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Ian Flynn</p>
      </footer>
    </Router>
  );
}

export default App;

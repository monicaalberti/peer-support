import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ReasonsPage from './pages/ReasonsPage';
import MySkillsPage from './pages/MySkillsPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // if (isLoading) {
  //   return (
  //     <LoadingPage color="blue" />
  //   );
  // }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reasons" element={<ReasonsPage />} />
        <Route path="/my-skills" element={<MySkillsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

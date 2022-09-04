import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from './pages/detailPage';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/detail-page' element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
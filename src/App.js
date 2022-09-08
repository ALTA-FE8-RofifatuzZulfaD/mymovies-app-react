import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from './pages/detailPage';
import FavMovie from './pages/FavMovie';
import Home from './pages/Home';
import { FavProvider } from "./context/FavContext";

function App() {
  return (
    <FavProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/detail-page' element={<DetailPage />} />
          <Route path='/favorite-movies' element={<FavMovie />} />
        </Routes>
      </BrowserRouter>
    </FavProvider>
  )
}

export default App;
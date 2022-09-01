import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar";
import Cards from "./components/cards";
import { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import DetailPage from './pages/detailPage';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/detail-page' element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

// function App() {
//   
//   return (
    
//     
//   );
// }

// export default App;

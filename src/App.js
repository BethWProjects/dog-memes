import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

//import Routes
import SadDog from './routes/Dogs';
import HappyDog from './routes/HappyDog';
import Random from './routes/Random';

//import components
import Nav from './Nav/Nav';
import Header from './Header/Header';
import Memes from './MemeGenerator/Memes';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/sad_dog' element={<SadDog />} />
        <Route path='/happy_dog' element={<HappyDog />} />
        <Route path='/tired_dog' element={<Random />} />
      </Routes>
    </Router>
    // <div>
    //   <Header />
    //   <Memes />
    // </div>
    )
}

export default App;

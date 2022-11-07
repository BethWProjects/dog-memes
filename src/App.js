import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

//import Routes
import Dogs from './routes/Dogs';
import Cats from './routes/Cats';
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
        <Route path='/dogs' element={<Dogs />} />
        <Route path='/cats' element={<Cats />} />
        <Route path='/random' element={<Random />} />
      </Routes>
    </Router>
    // <div>
    //   <Header />
    //   <Memes />
    // </div>
    )
}

export default App;

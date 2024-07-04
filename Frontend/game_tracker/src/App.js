import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import Home from './Home'
import { Fragment } from 'react'
import { useState, useEffect } from 'react'

function App() {

  return (
    <div className="App">
      <Router>
        <div className="display">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;






import React, {useState} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home'
import Profil from './components/Profil'
import Search from './components/Search'

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/profil" exact component={Profil} />
        <Route path="/search" exact component={Search} />
      </Router>
    </div>
  );
}

export default App;

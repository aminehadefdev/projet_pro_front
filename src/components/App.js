import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './home/Home'
import Profil from './profil/Profil'
import Search from './profil/Search'
import ProfileTarget from './profil/ProfileTarget'
import VerifyEmail from "./home/VerifyEmail"

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/profil" exact component={Profil} />
        <Route path="/search" exact component={Search} />
        <Route path="/search/:id" exact component={ProfileTarget} />
        <Route path="/verify/email/:slug" exact component={VerifyEmail} />
      </Router>
    </div>
  );
}

export default App;

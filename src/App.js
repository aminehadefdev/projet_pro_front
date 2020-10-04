import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './components/Footer'
import MainHome from './components/MainHome'
import HeaderHome from './components/HeaderHome'
function App() {
  return (
    <div>
      <HeaderHome />
      <MainHome />
      <Footer />
    </div>
  );
}

export default App;

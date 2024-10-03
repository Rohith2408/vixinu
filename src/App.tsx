import React from 'react';
import logo from './logo.svg';
import './App.css';
import Section1 from './components/Section1';
import Memes from './components/Memes';
import About from './components/About';
import banner from '../images/banner.gif'


function App() {
  return (
    <div className="App">
      <div ><Section1/></div>
      {/* <img className={styles.banner} src={banner}/> */}
      <div><About/></div>
      <div><Memes/></div>
    </div>
  );
}

export default App;

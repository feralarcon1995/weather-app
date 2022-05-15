import React from 'react';
import './App.css';
import Footer from './component/Footer';
import SearchWeather from './component/SearchWeather';

function App() {

  return (
    <div className='main-wrapper '>
      <SearchWeather />
      <Footer/>
    </div>
  );
}

export default App;

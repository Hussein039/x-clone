import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/main/sidebar';
import Feed from './components/main/feed';

const App = () => {
  

  return (
    <div className="app">
      <div className='wrapper'>
        <Sidebar />
        <Feed />
      </div>
      
    </div>
  );
};

export default App;

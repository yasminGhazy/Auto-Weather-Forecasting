import React from 'react';
import './App.css';
import Main from './components/main/weather.js';
import Header from './components/header/header.js';
import Sidebar from './components/sidebar/sidebar.js';
function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Main />

    </div>
  );
}

export default App;

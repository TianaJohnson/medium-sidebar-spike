import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';

const items = [
  { name: 'home', label: 'Home' },
  { name: 'billing', label: 'Billing' },
  { name: 'settings', label: 'Settings' },
]




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
      <Sidebar items={items} />
    </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

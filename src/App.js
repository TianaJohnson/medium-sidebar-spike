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
      <Sidebar items={items} />
    </div>
  );
}

export default App;

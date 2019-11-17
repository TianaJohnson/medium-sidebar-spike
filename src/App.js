import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';

//out with the old
// const items = [
//   { name: 'home', label: 'Home' },
//   { name: 'billing', label: 'Billing' },
//   { name: 'settings', label: 'Settings' },
// ]

//in with the new
const items = [
  { name: 'home', label: 'Home' },
  {
    name: 'billing',
    label: 'Billing',
    items: [
      { name: 'statements', label: 'Statements' },
      { name: 'reports', label: 'Reports' },
    ],
  },
  {
    name: 'settings',
    label: 'Settings',
    items: [{ name: 'profile', label: 'Profile' }],
  },
]


function App() {
  return (
    <div className="App">
      <Sidebar items={items} />
    </div>
  );
}

export default App;

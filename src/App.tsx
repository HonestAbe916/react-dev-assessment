import React from 'react';
import './App.css';
import UsersList from './UsersList';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <UsersList />
      </div>
    </div>
  );
}

export default App;

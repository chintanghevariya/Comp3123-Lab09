import React from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './student';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Student Title = "Welcome to fullstack development - I"/>
        <Student Desc = "React JS programming Week 09 Lab Exercise"/>
        <Student ID = "101236361"/>
        <Student Name = "Chintan Ghevariya"/>
        <p>
          George Brown College
        </p>
    
      </header>
    </div>
  );
}

export default App;

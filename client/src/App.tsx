import React from 'react';
// import logo from './src/logo.svg';
import './App.css';
const reactHalfmoon = require('reacthalfmoon');
const { Button } = reactHalfmoon;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button type="primary">Click Me!</Button>
      </header>
    </div>
  );
}

export default App;

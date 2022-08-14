import React from 'react';
import './App.css'
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="app">
      <h2>App.js</h2>
      <ParentComponent  title="This string has been passed through props from App.js"/>
    </div>
  );
}

export default App;

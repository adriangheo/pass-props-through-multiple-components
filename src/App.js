import React from 'react';
import CustomComponent from './components/CustomComponent';
import './App.css'

function App() {
  return (
    <div className="app">
      <h2>App.js</h2>
      <CustomComponent  title="This string passed through props from App.js"/>
    </div>
  );
}

export default App;

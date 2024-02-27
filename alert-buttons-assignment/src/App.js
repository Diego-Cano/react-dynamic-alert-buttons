// App.js
import React from 'react';
import Toolbar from './Toolbar';
import './styles.css'; 

function App() {
  return (
    <div className="app">
      <h1 className="heading">Hello, What would you like to do Today?</h1>
      <Toolbar />
    </div>
  );
}

export default App;

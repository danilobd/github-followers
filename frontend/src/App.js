import React from 'react';
import './App.css';

import Content from "./components/Content";

function App() {

  document.title = 'GitHub Follow/Followers Track';

  return (
    <div className="App">
      <header className="App-header">
      
        <Content  />
        
      </header>
    </div>
  );
}

export default App;

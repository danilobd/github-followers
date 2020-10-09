import React, { useState } from 'react';
import './App.css';

import Content from "./components/Content";

function App() {

  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
      
        {
        loading ? 
          <span>Loading...</span> 
          : 
          <Content setLoading={setLoading} />
        }

      </header>
    </div>
  );
}

export default App;

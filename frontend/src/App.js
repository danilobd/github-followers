import React, { useState } from 'react';
import './App.css';

import Form from "./components/Form";
import Sections from "./components/Sections";

function App() {

  const [listUsers, setListUsers] = useState();
  const [loading, setLoading] = useState(false);

  const Content = () => {
    
    if(!listUsers)
      return <Form setLoading={setLoading} setListUsers={setListUsers} />
    else {
      let elements = []

      for (const name of Object.keys(listUsers)) {
        elements.push(<Sections key={name} content={listUsers[name]} name={name} />);  
      }

      return (
        <>
          <button type="button" className="btn btn-dark closeButton" onClick={() => setListUsers()}>Close</button>
          {elements}
        </>
      );
    }
  }

  return (
    <div className="App">
      <header className="App-header">
      
        {
        loading ? 
          <span>Loading...</span> 
          : 
          <Content />
        }

      </header>
    </div>
  );
}

export default App;

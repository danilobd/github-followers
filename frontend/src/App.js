import React, { useState } from 'react';
import './App.css';

import Form from "./components/Form";
import Card from "./components/Card";

function App() {

  const [listUsers, setListUsers] = useState();
  const [loading, setLoading] = useState(false);

  const Sections = ({content, name}) => {
    console.log(name, content);
    return (
      <div key={name} className="container">
        <h5>{name}</h5>
        
          <div className="row">
          {
            content.map(element => {
              return <Card key={element.id} element={element} />
            })
          }
        </div>
      </div>
    )
  }

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

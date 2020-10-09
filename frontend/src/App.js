import React, { useState } from 'react';
import './App.css';

import Form from "./components/Form";

function App() {

  const [listUsers, setListUsers] = useState();
  const [loading, setLoading] = useState(false);

  const Card = ({element}) => {
    return (
      <div className="col p-2">
        <div key={element.id} className="card" style={{width: 9 + 'rem'}}>
          <img src={element.avatar_url} className="card-img-top" alt={element.login} />
          <div className="card-body p-1">
            <a href={element.html_url} target="_blank" rel="noopener noreferrer" className="card-link text-dark h6">
              {element.login}
            </a>
          </div>
        </div>
      </div>
    )
  }

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

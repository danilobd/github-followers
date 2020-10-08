import React, { useRef, useState } from 'react';
import './App.css';

function App() {

  const inputUsername = useRef();
  const [listUsers, setListUsers] = useState();
  const [loading, setLoading] = useState(false);

  const Card = ({element}) => {
    return (
      <div className="col p-2">
        <div key={element.id} className="card" style={{width: 9 + 'rem'}}>
          <img src={element.avatar_url} className="card-img-top" alt="..." />
          <div className="card-body p-1">
            <a href={element.html_url} target="_blank" rel="noopener noreferrer" className="card-link text-dark h6">
              {element.login}
            </a>
          </div>
        </div>
      </div>
    )
  }

  const Form = () => {
    return (
      <div className="container">

        <p>Type your GitHub username</p>

        <div className="input-group mb-3">
          <div className="input-group-prepend"><span className="input-group-text" id="basic-addon3">https://github.com/</span></div>
          <input type="text" ref={inputUsername} className="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder="GitHub username" />
        </div>

        <button type="button" onClick={() => check()} className="btn btn-secondary">Check</button>

      </div>
    )
  }

  const Sections = ({content, name}) => {
    console.log(name, content);
    return (
      <div key={name} className="container">
        <h5>{name}</h5>
        <button type="button" className="btn btn-secondary" onClick={() => setListUsers()}>X</button>
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
      return <Form />
    else {
      let elements = []

      for (const name of Object.keys(listUsers)) {
        elements.push(<Sections key={name} content={listUsers[name]} name={name} />);  
      }

      return elements;
    }
  }

  const check = async () => {

    const username = inputUsername.current.value;

    if(!username){
      alert("What username?");
      return 1;
    }

    setLoading(true);

    try {
      fetch(`http://localhost:5000/api/username/${username}`)
      .then(response => response.json())
        .then(jsondata => setListUsers(jsondata))

    } catch (error) {
      setLoading(false);
      alert(error);
    }

    setLoading(false);

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

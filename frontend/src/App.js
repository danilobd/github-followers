import React, { useRef, useState } from 'react';
import './App.css';

function App() {

  const inputUsername = useRef();
  const [listUsers, setListUsers] = useState();
  const [loading, setLoading] = useState(false);

  const Content = () => {
    
    if(!listUsers)
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
    else {
      return (
        <div className="container">
          <h5>Don't follow you back</h5>
          <button type="button" class="btn btn-secondary" onClick={() => setListUsers()}>X</button>
            <div className="row">
            {
              listUsers.dontFollowBack.map(element => {
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
              })
            }
          </div>
        </div>
      )
      
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

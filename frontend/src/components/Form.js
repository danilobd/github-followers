import React, { useRef } from "react";
import githubLogo from "../images/github.svg";

const check = async (inputUsername, setLoading, setListUsers) => {

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

const Form = ({setLoading, setListUsers}) => {

  const inputUsername = useRef();

  return (
    <div className="container ">

      <div>
        <img src={githubLogo} className="gitLogo" alt="GitHub Logo"></img>
        
      </div>

      <div className="input-group mb-3 form">
        <div className="input-group-prepend">
          <span className="input-group-text">https://github.com/</span>
        </div>
        <input type="text" ref={inputUsername} className="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder="GitHub username" />
      </div>

      <button type="button" onClick={() => check(inputUsername, setLoading, setListUsers)} className="btn btn-dark submit">Check</button>

    </div>
  )
}

export default Form;
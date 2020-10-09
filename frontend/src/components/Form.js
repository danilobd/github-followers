import React, { useRef, useState } from "react";
import githubLogo from "../images/github.svg";

const Form = ({ setListUsers }) => {

  const [loading, setLoading] = useState(false);
  const inputUsername = useRef();

  const check = async () => {

    setLoading(true);
  
    const username = inputUsername.current.value;
  
    if(!username){
      alert("What username?");
      setLoading(false);
      return 1;
    }
  
    const response = await fetch(`http://localhost:5000/api/username/${username}`);
    const jsondata = await response.json();
    
    if(response.status === 200 || response.status === 304){
      setLoading(false);
      setListUsers(jsondata);
    }else {
      setLoading(false);
      console.log("Request Error");
    }
  }

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

      <button type="button" onClick={async () => await check()} className="btn btn-dark submit">
        { loading ? "Loading..." : "Check"}
      </button>

    </div>
  )
}

export default Form;
import React, { useState } from "react";

import Form from "../components/Form";
import Sections from "../components/Sections";

const Content = () => {
    
  const [listUsers, setListUsers] = useState();

  if(!listUsers)
    return <Form setListUsers={setListUsers} />
  else {
    let elements = []

    for (const name of Object.keys(listUsers)) {
      elements.push(<Sections key={name} content={listUsers[name].users} name={listUsers[name].title} />);  
    }

    return (
      <>
        <button type="button" className="btn btn-dark closeButton" onClick={() => setListUsers()}>Close</button>
        {elements}
      </>
    );
  }
}

export default Content;
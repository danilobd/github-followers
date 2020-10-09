import React from "react";

import Card from "../components/Card";

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

export default Sections;
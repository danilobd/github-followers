import React from "react";

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

export default Card;
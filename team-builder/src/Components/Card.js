import React from "react";

function Card(props) {
  return (
    <div>
      <h4>{props.name}</h4>
      <p>{props.email}</p>
      <p>{props.role}</p>
    </div>
  );
}

export default Card;

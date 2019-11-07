import React from "react";
import Card from "./Card";

function List(props) {
  return props.team.map((element, index) => {
    return (
      <Card
        key={index}
        name={element.name}
        role={element.role}
        email={element.email}
      ></Card>
    );
  });
}

export default List;

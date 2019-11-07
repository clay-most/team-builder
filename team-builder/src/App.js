import React, { useState, useEffect } from "react";

import "./App.css";

import Card from "./Components/Card";
import List from "./Components/List";
import Form from "./Components/Form";

function App() {
  const [team, setTeam] = useState([
    { name: "Anna", email: "anna@morris.com", role: "React Developer" }
  ]);

  useEffect(() => {
    console.log(team);
  }, [team]);

  const submitHandler = newMember => {
    setTeam([...team, newMember]);
  };

  return (
    <div className="App">
      Team Builder App
      <Form submitHandler={submitHandler}></Form>
      <List team={team}></List>
      <Card></Card>
    </div>
  );
}

export default App;

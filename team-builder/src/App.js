import React from 'react';

import './App.css';

import Card from "./Components/Card"
import List from "./Components/List"
import Form from "./Components/Form"

function App() {
  return (
    <div className="App">
      Team Builder App
      <Form></Form>
      <List></List>
      <Card></Card>
    </div>
  );
}

export default App;

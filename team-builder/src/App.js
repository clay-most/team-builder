import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';

function App() {
  const [team, setTeam] = useState([
    { name: 'Anna', email: 'anna@email.com', role: 'Front end engineer' }
  ]);

const addMember = member =>{
  setTeam([...team, member])
}

  return (
    <div className="App">
      <h1>Team Builder</h1>
      <Form addMember={addMember}/>
      <List team={team} />
    </div>
  );
}

export default App;

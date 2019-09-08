import React, { useState } from 'react';

import Form from './components/Form'

import './App.css';

function App() {
  const [teamMembers, setTeamMembers ] = useState([])

  return (
    <div className="App">
      <Form teamMembers={teamMembers} setTeamMembers={setTeamMembers}/>
    </div>
  );
}

export default App;

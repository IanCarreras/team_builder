import React, { useState } from 'react';
import styled from 'styled-components'

import Form from './components/Form'
import Member from './components/Member'

import './App.css';

const Members = styled.ul`
  display: flex;
  flex-flow: wrap row;
  width: 90%;
  margin: auto;
  padding: 2rem;  
  border: 1px solid black;
  background-color: black;
`

function App() {
  const [ teamMembers, setTeamMembers ] = useState([])
  const [ memberToEdit, setMemberToEdit ] = useState()

  const editMember = (member) => {
    return teamMembers.map((obj, indx) => {
      return indx === memberToEdit.index ? member : obj
    })
  }

  return (
    <div className="App">
      <Form 
        teamMembers={teamMembers} 
        setTeamMembers={setTeamMembers} 
        memberToEdit={memberToEdit}
        setMemberToEdit={setMemberToEdit}
        editMember={editMember} />
      <Members>
        { 
          teamMembers.map((teamMember, indx) => {
            return <Member 
                    key={indx} 
                    index={indx}
                    teamMember={teamMember} 
                    memberToEdit={memberToEdit}
                    setMemberToEdit={setMemberToEdit} />
          })
        }
      </Members>
    </div>
  );
}

export default App;

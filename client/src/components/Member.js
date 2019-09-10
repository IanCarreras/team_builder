import React from 'react'
import styled from 'styled-components'

const MemberDiv = styled.li`
    list-style: none;
    margin: 1rem 0 0 1rem;
    width: 30%;
    background-color: white;
    padding: .5rem;
`
const Edit = styled.span`
    float: right;

`


function Member(props) {
    const { name, email, role } = props.teamMember
    const { setMemberToEdit } = props
    return (
        <MemberDiv>
            <Edit onClick={() => setMemberToEdit(props.teamMember)} >Edit</Edit>
            <h2>{name}</h2>
            <h3>{email}</h3>
            <h3>{role}</h3>
        </MemberDiv>
    )
}

export default Member
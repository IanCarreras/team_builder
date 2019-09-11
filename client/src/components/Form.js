import React, { useState, useEffect } from 'react'

function Form(props) {
    const { teamMembers, setTeamMembers, memberToEdit, editMember, setMemberToEdit } = props
    const emptyMember = {
        name: '',
        email: '',
        role: ''
    }
    const [ member, setMember ] = useState(emptyMember)

    const handleChange = e => {
        setMember({...member, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        const { name, email, role } = member
        e.preventDefault()
        if( !/^[a-z ]+$/ig.test(name) || !/([a-z0-9@.])+$/ig.test(email) || !/^[a-z ]+$/ig.test(role) ) return alert('invalid input')
        if(memberToEdit) {
            setMemberToEdit(false)
            setMember(emptyMember)
            return setTeamMembers(editMember(member))
        }
        setMember(emptyMember)
        return setTeamMembers([...teamMembers, member])
    }

    useEffect(() => {
        if(memberToEdit) return setMember(memberToEdit)
    }, [memberToEdit])

    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={member.name}
                    onChange={e => handleChange(e)}
                />
                </label>
                <label>
                Email:
                <input
                    type="text"
                    name="email"
                    value={member.email}
                    onChange={e => handleChange(e)}
                />
                </label>
                <label>
                Role:
                <input
                    type="text"
                    name="role"
                    value={member.role}
                    onChange={e => handleChange(e)}
                />
                </label>
                <button>Submit!</button>
            </form>
        </div>
    )
}

export default Form
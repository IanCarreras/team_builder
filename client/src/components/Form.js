import React, { useState } from 'react'

function Form(props) {
    const { teamMembers, setTeamMembers } = props
    const [ member, setMember ] = useState({
        name: '',
        email: '',
        role: ''
    })

    const handleChange = e => {
        setMember({...member, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(member)
        return setTeamMembers([...teamMembers, member])
    }

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
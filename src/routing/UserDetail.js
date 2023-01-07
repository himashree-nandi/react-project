import React from 'react'
import { useState } from 'react'
export default function UserDetail() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPass] = useState("")

    function submit(e) {
        e.preventDefault()
        localStorage.setItem('data', JSON.stringify({ name: name, email: email, password: password }))
        window.location.href = '/display'
    }
    return (
        <div className='container mt-5'>
            <form onSubmit={submit}>
            <h1 className='bg-secondary text-light'>Sign In Page</h1>
                <div className='row-5'> <input type="text" className='form-control' name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" /></div>
                <div className='row-5 mt-2'><input type="email"className='form-control' name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" /></div>
                <div className='row-5 mt-2'><input type="password"className='form-control' name="password" value={password} onChange={(e) => setPass(e.target.value)} placeholder="Enter your passowrd" /></div>
                <div className='row-5 mt-2'><input type="submit" className='bg-primary text-light col-1' value="submit" /></div>
            </form>
        </div>
    )
}

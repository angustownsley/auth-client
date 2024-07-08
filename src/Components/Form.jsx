import { useState } from 'react'

export default function Form({ formType }) {
    const [user, setUser] = useState({ username: '', password: '' })
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSumbit = async (e) => {
        e.preventDefault()
        console.log(formType)

        if (formType === 'Register') {
            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: user.username,
                    password: user.password,
                }),
            }

            console.log(options)

            fetch('http://localhost:4000/register', options)
                .then((response) => response.json())
                .then((response) => {
                    if (!response.error) {
                        alert('Registered: ' + response.user.username)
                        setUser({ username: '', password: '' })
                    } else {
                        alert('Error: ' + response.error)
                        console.log(response)
                    }
                })
                .catch((err) => console.error(err))
        }

        if (formType === 'Login') {
            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: user.username, password: user.password }),
            }

            fetch('http://localhost:4000/login?=', options)
                .then((response) => response.json())
                .then((response) => {
                    if (!response.error) {
                        localStorage.setItem('token', response.token)
                        alert('Succesfully Logged In')
                        setUser({ username: '', password: '' })
                    } else {
                        alert('Error: ' + response.error)
                    }
                })
                .catch((err) => console.error(err))
        }
    }

    return (
        <>
            <h1>{formType}</h1>

            <form onSubmit={handleSumbit}>
                <input
                    type="text"
                    name="username"
                    id={`${formType}-username-input`}
                    value={user.username}
                    placeholder="username"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    id={`${formType}-password-input`}
                    value={user.password}
                    placeholder="password"
                    onChange={handleChange}
                />
                <input type="submit" value="Register" />
            </form>
        </>
    )
}

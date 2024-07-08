import { useEffect, useState } from 'react'
import './App.css'
import Form from './Components/Form'
import NavButton from './Components/NavButton'
import Dashboard from './Components/Dashboard'

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [username, setUsername] = useState('')
    const [token, setToken] = useState(localStorage.getItem('token'))

    const handleSignout = () => {
        localStorage.removeItem('token')
        setIsLoggedIn(false)
        setToken(localStorage.getItem('token'))
    }
    useEffect(() => {
        if (token) {
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            }
            let isValid
            fetch('http://localhost:4000/profile?=', options)
                .then((response) => response.json())
                .then((response) => {
                    isValid = response.isValid
                    if (isValid) {
                        setIsLoggedIn(true)
                        setUsername(response.username)
                    }
                })
                .catch((err) => console.error(err))
        }
    }, [token])

    return (
        <>
            <nav>
                <NavButton
                    buttonType={'login'}
                    text={'Login'}
                    isLoggedIn={isLoggedIn}
                    handleSignout={handleSignout}
                />
                <NavButton
                    buttonType={'register'}
                    text={'Register'}
                    isLoggedIn={isLoggedIn}
                    handleSignout={handleSignout}
                />
            </nav>

            <div className="App">
                <Dashboard isLoggedIn={isLoggedIn} username={username} />
                <Form
                    formType={'Register'}
                    setIsLoggedIn={setIsLoggedIn}
                    setToken={setToken}
                />
                <Form
                    formType={'Login'}
                    setIsLoggedIn={setIsLoggedIn}
                    setToken={setToken}
                />
            </div>
        </>
    )
}

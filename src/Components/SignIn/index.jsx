import { useState } from 'react'

import { useSignInEmailPassword } from '@nhost/react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './index.css'

export default function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/chats'

    const { signInEmailPassword, isLoading, isError, error } = useSignInEmailPassword()

    async function handleSubmit(e) {
        e.preventDefault()
        const { error } = await signInEmailPassword(email, password)
        if (!error) {

            navigate(from, { replace: true })
        }
    }


    return (
        <div className='sign-in-container'>
            <div className="card-container">
                <h1 className='heading'>Sign in</h1>
                <form onSubmit={handleSubmit}>
                    <div className='input-container'>
                        <label className='label-text'>Email</label>
                        <input className='input-element' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                    </div>
                    <div className='input-container'>
                        <label className='label-text'>Password</label>
                        <input className='input-element' type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                    </div>

                    <div className='btn-container'>
                        <button className='btn' disabled={isLoading}>{isLoading ? 'Signing in…' : 'Sign In'}</button>
                        {isError && <p className="error">{error?.message}</p>}
                    </div>

                </form>
                <p className='para'>
                    New here? <Link to="/sign-up" className='nav-link'>Create an account</Link>
                </p>
            </div>
        </div>

    )
}
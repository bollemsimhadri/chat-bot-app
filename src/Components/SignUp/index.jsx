import { useState } from 'react'
import { useSignUpEmailPassword } from '@nhost/react'
import { Link, useNavigate } from 'react-router-dom'

import './index.css'

export default function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const { signUpEmailPassword, isLoading, isError, error } = useSignUpEmailPassword()

    async function handleSubmit(e) {
        e.preventDefault()
        const { error } = await signUpEmailPassword(email, password)
        if (!error) {

            navigate('/sign-in')
        }
    }

    return (
        <div className="sign-up-container">
            <div className='card-container'>
                <h1 className='heading'>Create account</h1>
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
                        <button className='btn' disabled={isLoading}>
                            {isLoading ? 'Creating…' : 'Sign Up'}
                        </button>
                        {isError && <p className="error">{error?.message}</p>}
                    </div>
                </form>
                <p className='para'>
                    Already have an account? <Link to="/sign-in" className='nav-link'>Sign in</Link>
                </p>
            </div>

        </div>
    )
}
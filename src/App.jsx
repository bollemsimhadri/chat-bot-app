import { Routes, Route, Navigate } from 'react-router-dom'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import Chats from './Components/Chats'
import RequireAuth from './Components/RequireAuth'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/chats" replace />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />

      <Route element={<RequireAuth />}>
        <Route path="/chats" element={<Chats />} />
      </Route>

      {/* Catch-all should go to sign-in, NOT chats */}
      <Route path="*" element={<Navigate to="/sign-in" replace />} />
    </Routes>
  )
}

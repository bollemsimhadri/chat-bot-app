import { Outlet, Navigate, useLocation } from 'react-router-dom'
import { useAuthenticationStatus } from '@nhost/react'

export default function RequireAuth() {
    const { isAuthenticated, isLoading } = useAuthenticationStatus()
    const location = useLocation()

    if (isLoading) return <div style={{ padding: 20 }}>Checking session…</div>
    if (!isAuthenticated) return <Navigate to="/sign-in" state={{ from: location }} replace />

    return <Outlet />
}
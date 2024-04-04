import React, { PropsWithChildren } from 'react'
import { Auth } from './AuthContext'
import { Navigate, useLocation } from 'react-router-dom'

const RequireAuth: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
  const { isLoggedIn } = Auth()
  const location = useLocation()
  if (!isLoggedIn) {
    return <Navigate to="/" state={{ path: location.pathname }} />
  }
  return children
}

export default RequireAuth

import React, { useState, createContext, useContext, ReactNode } from 'react'

type User = {
  username: string
  password: string
}

interface AuthContextType {
  user: User | null
  isLoggedIn: boolean
  darkMode: boolean
  login: (user: User) => void
  logout: () => void
  toggleDarkMode: () => void
}

const initialState: AuthContextType = {
  user: null,
  isLoggedIn: false,
  darkMode: false,
  login: () => {},
  logout: () => {},
  toggleDarkMode: () => {},
}

const AuthContext = createContext<AuthContextType>(initialState)
type AuthProviderProps = { children: ReactNode }

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, setState] = useState<AuthContextType>({
    ...initialState,
    darkMode: localStorage.getItem('darkMode') === 'true',
    user: JSON.parse(localStorage.getItem('user') || 'null'),
  })

  const login = (user: User) => {
    setState({ ...state, isLoggedIn: true, user })
  }

  const logout = () => {
    setState({ ...state, isLoggedIn: false, user: null })
  }

  const toggleDarkMode = () => {
    localStorage.setItem('darkMode', JSON.stringify(!state.darkMode))
    setState({ ...state, darkMode: !state.darkMode })
  }

  const value = { ...state, login, logout, toggleDarkMode }

  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  )
}

export const Auth = () => {
  return useContext(AuthContext)
}

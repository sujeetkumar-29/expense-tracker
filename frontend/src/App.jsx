import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Login from './pages/Auth/Login'
import SignUp from './pages/Auth/SignUp'
import Dashboard from './pages/Dashboard/Dashboard'
import Income from './pages/Dashboard/Income'
import Expense from './pages/Dashboard/Expense'
import UserProvider from './context/userContext'
import { Toaster } from 'react-hot-toast'
import ExpenseTrackerHome from './pages/Dashboard/Home'
import { ThemeProvider } from './context/themeContext'


const App = () => {
  return (
    <ThemeProvider>
    <UserProvider>
      <div className="">
        <Router>
          <Routes>
            <Route path="/" element={<Root />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/signup" exact element={<SignUp />} />
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/income" exact element={<Income />} />
            <Route path="/expense" exact element={<Expense />} />
            {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
          </Routes>
        </Router>
      </div>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            fontSize: "13px"
          },
        }}
      />
    </UserProvider>
    </ThemeProvider>
  )
}

export default App;

const Root = () => {
  // check if user is authenticated or token is present
  const isAuthenticated = !!localStorage.getItem('token');

  // Redirect to Dashboard if authenticated , otherwise redirect to Login
  return isAuthenticated ? (
    <Navigate to="/dashboard" replace />
  ) :
    (<Navigate to="/login" replace />

    )
};
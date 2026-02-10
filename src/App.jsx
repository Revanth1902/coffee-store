import React, { useState } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import ProfileCompletion from './pages/ProfileCompletion'
import CafeSelection from './pages/CafeSelection'
import TableBooking from './pages/TableBooking'
import Menu from './pages/Menu'
import OrderTracking from './pages/OrderTracking'
import AdminDashboard from './pages/AdminDashboard'
import CafeOwnerDashboard from './pages/CafeOwnerDashboard'
import ChefDashboard from './pages/ChefDashboard'
import WaiterDashboard from './pages/WaiterDashboard'
import CustomerDashboard from './pages/CustomerDashboard'
import { FaLinkedin, FaYoutube } from 'react-icons/fa'
import { MdEmail, MdPhone } from 'react-icons/md'


export default function App(){
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  const handleLogout = () => {
    setUser(null)
    navigate('/')
  }

  return (
    <div className="app">
      <header className="header">
        <div style={{display:"flex"}}>
          <img src="/logo.png" alt="logo" className="app-logo" />

        <div className="brand">brew & co</div>
        </div>
     
      <nav className="nav">
  <Link to="/">Home</Link>
  <Link to="/">Service</Link>
<Link to="/">How it Works </Link>

<Link to="/">Contact us</Link>


  {!user ? (
    <>
    <div>
       <Link to="/login" className="btn-nav">Login</Link>
      <Link to="/register" className="btn-nav btn-primary">Register</Link>
    </div>
     
    </>
  ) : (
    <>
      <span className="user-info">{user.email} ({user.role})</span>
      <button className="btn-logout" onClick={handleLogout}>Logout</button>
    </>
  )}
</nav>

      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login setUser={setUser}/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/profile-completion" element={<ProfileCompletion/>} />
          <Route path="/cafe-selection" element={<CafeSelection/>} />
          <Route path="/table-booking/:cafeId" element={<TableBooking/>} />
          <Route path="/menu/:bookingId" element={<Menu/>} />
          <Route path="/order-tracking" element={<OrderTracking/>} />
          <Route path="/admin-dashboard" element={<AdminDashboard user={user}/>} />
          <Route path="/cafe-owner-dashboard" element={<CafeOwnerDashboard user={user}/>} />
          <Route path="/chef-dashboard" element={<ChefDashboard user={user}/>} />
          <Route path="/waiter-dashboard" element={<WaiterDashboard user={user}/>} />
          <Route path="/customer-dashboard" element={<CustomerDashboard user={user}/>} />
        </Routes>
      </main>
<footer className="footer">
  <div className="footer-content">

    <div className="footer-left">
      <span className="brand">© Brew & Co</span>
      <p>Coffee Ordering & Management Platform</p>
    </div>

    <div className="footer-links">
      <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
        <FaLinkedin />
        <span>LinkedIn</span>
      </a>

      <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
        <FaYoutube />
        <span>YouTube</span>
      </a>

      <a href="mailto:support@brewco.com">
        <MdEmail />
        <span>support@brewco.com</span>
      </a>

      <a href="tel:+911234567890">
        <MdPhone />
        <span>+91 12345 67890</span>
      </a>
    </div>

  </div>
</footer>


    </div>
  )
}

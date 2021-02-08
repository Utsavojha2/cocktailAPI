import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
  return (
    <section className="navbar">
      <div className="nav-center">
        <div className="nav-title">
          <img src={logo} alt="" className="logo" />
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </section>
  )
}

export default Navbar

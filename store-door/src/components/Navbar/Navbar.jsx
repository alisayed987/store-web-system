import React from 'react'
import {Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to=''>Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mx-auto mb-lg-0 px-auto ">
        <li className="nav-item ">
          <Link className="nav-Link text-dark active text-decoration-none mx-1" aria-current="page" to=''>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link text-dark text-decoration-none mx-1" to='About'>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link text-dark text-decoration-none mx-1" to='Services'>Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link text-dark text-decoration-none mx-1" to='Contacts'>Contacts</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link text-dark text-decoration-none mx-1" to='Categories'>Categories</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle ms-1 p-0" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="#">Action</Link></li>
            <li><Link className="dropdown-item" to="#">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
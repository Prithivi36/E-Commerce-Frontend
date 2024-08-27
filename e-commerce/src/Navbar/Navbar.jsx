import React from 'react'
import { useNavigate } from 'react-router'

function Navbar() {
    const navigator=useNavigate()
  return (
    <div className='px-4 '>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">E-Secure</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home </a>
                </li>
                <li onClick={()=>navigator("/add")} className="nav-item active">
                    <a className="nav-link" onClick={()=>navigator("/add")} >Manufacture </a>
                </li>
                <li>
                    <a className="nav-link" href="#">My Products</a>
                </li>
                
                </ul>
            </div>
            </nav>
    </div>
  )
}

export default Navbar
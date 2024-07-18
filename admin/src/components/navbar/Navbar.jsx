import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img className="logo" src={assets.tapzFood} alt="" />
        <p>Admin Panel</p>
      </div>
      
      <img className="profile" src={assets.myImg} alt="" />
    </div>
  )
}




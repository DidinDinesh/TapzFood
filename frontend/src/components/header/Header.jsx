import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h2>Order your favourite food here</h2>
        <p>
          Indulge in your culinary desires with just a few 
           clicks. Explore a vast selection of restaurants 
           near you, browse delicious menus, and order your 
           favorite meals for fast and convenient delivery. 
           No more cooking, no more takeout lines, just 
           satisfaction delivered straight to your door.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header

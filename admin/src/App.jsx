import React from 'react'
import { Navbar } from './components/navbar/Navbar'
import { SideBar } from './components/sidebar/SideBar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/add/Add'
import List from './pages/list/List'
import Orders from './pages/orders/Orders'


const App = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <div className="app-content">
      <SideBar />
      <Routes>
        <Route path="/add" element={<Add/>} />
        <Route path="/list" element={<List/>} />
        <Route path="/add" element={<Orders/>} />
      </Routes>
      </div>
    </div>
  )
}

export default App

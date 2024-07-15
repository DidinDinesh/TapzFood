import React, { useState } from 'react'
import './Home.css'
import Header from "../../components/header/Header"
import ExploreMenu from "../../components/exploreMenu/ExploreMenu"
import FoodDisplay from "../../components/foodDisplay/FoodDisplay"
import AppDownload from "../../components/appdownload/AppDownload"

const Home = () => {

  const [ category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  )
}

export default Home

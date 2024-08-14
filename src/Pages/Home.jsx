import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Products from '../Components/FoodItem'
import CategoryMenu from '../Components/CategoryMenu'
// import Cart from '../Components/Cart'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <CategoryMenu/>
    <Products/>
    {/* <Cart/> */}
    </>
  )
}

export default Home
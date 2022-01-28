import React from 'react'
import Categories from '../components/categori/Categories'
import Navbar from '../components/navbar/Navbar'
import Slider from '../components/Slider/Slider'




const Home = () => {
    return (
        <div>
            <Navbar/>
            <Slider/>
            <Categories/>
        </div>
    )
}

export default Home

import React from 'react'
import AllRoutes from './Components/AllRoutes'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Footer from './Components/Footer'
// import "./styles.css";
import "swiper/css/bundle";

const App = () => {
  return (
    <div>
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  )
}

export default App
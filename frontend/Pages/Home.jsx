import React, { useContext } from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
// import Footer from '../Components/Footer'
const Home = () => {
  // const navigate = useNavigate();

  // const { token } = useContext(AppContext); 

 
  return (
    <div>
      <Header />
      <SpecialityMenu />
      <TopDoctors />
      <Banner />
      
      {/* <Footer/> */}
    </div>
  )
}

export default Home

import React from 'react'
import Navbar from '../component/Navbar'
import Banner from '../component/Banner'
import Terrasse from '../component/Terrasse'
import Piscine from '../component/Piscine'
import Amenagement from '../component/Amenagements'
import Footer from '../component/Footer'
import "../style/Base.scss"

function HomePage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Terrasse />
      <Piscine />
      <Amenagement />
      <Footer/>
    </div>
  )
}

export default HomePage
import React from 'react'
import Header from '../../components/Home/Header'
import Hero from '../../components/Home/Hero'
import Features from '../../components/Home/Features'
import Screenshots from '../../components/Home/Screenshots'
import Footer from '../../components/Home/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Screenshots />
      <Footer />
    </div>
  )
}

export default Home
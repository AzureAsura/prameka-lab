import Hero from '@/components/landing-page/Hero'
import HeroCarousel from '@/components/landing-page/HeroCarousel'
import Showcase from '@/components/landing-page/Showcase'
import Layanan from '@/components/landing-page/Layanan'
import Story from '@/components/landing-page/Story'
import React from 'react'
import Appointment from '@/components/landing-page/Appoinment'
import News from '@/components/landing-page/News'
import Footer from '@/components/Footer'
import ContactToast from '@/components/ContactToast'

const page = () => {
  return (
    <div>
      <Hero/>
      <HeroCarousel/>
      <Showcase/>
      <Layanan/>
      <Story/>
      <Appointment/>
      <News/>
      <Footer/>
      <ContactToast/>
    </div>
  )
}

export default page
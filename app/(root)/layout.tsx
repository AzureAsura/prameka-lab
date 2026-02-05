import ContactToast from '@/components/ContactToast'
import Footer from '@/components/Footer'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
        <Navbar/>
        {children}
        <Footer/>
        <ContactToast />
    </div>
  )
}

export default layout
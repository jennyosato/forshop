import React from 'react'
import Navbar from './Navbar'
import Footer from './footer'
import NavLinks from './NavLinks'


const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
    <Navbar/>
    <NavLinks />
    <div className='relative top-14'>
    {children}
    </div>
    <Footer />
    
    
    </>
  )
}

export default Layout
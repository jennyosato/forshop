import React from 'react'
import Navbar from './Navbar'
import Footer from './footer'


const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
    <Navbar/>
    <div className='relative top-14'>
    {children}
    </div>
    <Footer />
    
    
    </>
  )
}

export default Layout
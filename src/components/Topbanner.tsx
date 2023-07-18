import React from 'react'
import Image from 'next/image'


const Topbanner = () => {
  return (
    <>
    <div className='w-full h-96 bg-white/70 shadow-sm flex items-center'>
        <Image src='/bann.jpg' alt='' width={500} height={500}  className='w-1/2 h-full'/>
        <div className=' flex flex-col justify-center items-center gap-4 text-center bg-[url("/bed.jpg")] bg-no-repeat bg-center bg-cover h-full w-1/2 bg-white/80 bg-blend-overlay'>
        <h1 className='text-3xl font-bold text-gray-900 '>One stop shop to transform your home</h1>
        <button className='shadow-lg px-4 py-2 bg-gray-900 hover:bg-white hover:text-gray-500 rounded-lg font-bold text-white'>Shop Now</button>
        </div>
      
        </div>
    </>
    
  )
}

export default Topbanner
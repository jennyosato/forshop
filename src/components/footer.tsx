import React from 'react'
import { signOut } from 'next-auth/react'
import {FaFacebookF} from 'react-icons/fa'
import {BsTwitter, BsGithub} from 'react-icons/bs'
import Link from 'next/link'
import { useRouter } from 'next/router'
const Footer = () => {
  const router = useRouter()
  
  return (
    <div className={router.pathname === '/stores'?'hidden':'text-white w-full h-60 bg-gray-950 flex flex-wrap justify-evenly px-4 py-4 mt-20 z-50'}>
      
      <div className=''>
        <h2 className='text-lg font-semibold text-white  '>Categories</h2>
        <ul className='text-white font-light'>
          <li>
            <Link href='/stores?category=furniture'>Furniture</Link>
          </li>
          <li>
            <Link href='/stores?category=electronics'>Electronics</Link>
          </li>
          <li>
            <Link href='/stores?category=kitchen'>Kitchen Appliances</Link>
          </li>
          <li>
            <Link href='/stores?category=beddings'>Beddings</Link>
          </li>
          <li>
            <Link href='/stores?category=curtains'>Curtains</Link>
          </li>
        </ul>
      </div>
      <div className='flex flex-col'>
        <Link href=''>About Us</Link>
        <Link href=''>FAQ</Link>
        <Link href=''>Courier and Delivery</Link>
        <Link href=''>Contact Us</Link>
        <Link href=''>Partners</Link>
      </div>
      <div className=' '>
        <h2 className=' bg-white rounded-sm font-semibold text-gray-900 text-center w-36'>Follow Us on</h2>
        <div className='flex gap-4 items-center text-white py-2 border w-36 justify-center'>
          <FaFacebookF className=''/>
          <BsTwitter />
          <BsGithub />
        </div>
      </div>
      
      {/* <button
              className="bg-gray-900 px-4 py-2 rounded-sm text-white"
              onClick={() => signOut()}
            >
              
              Sign Out
            </button> */}
      </div>
  )
}

export default Footer
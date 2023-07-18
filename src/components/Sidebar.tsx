import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'

const Sidebar = (props: any) => {
 
  return (
    <nav onClick={props.onClick} className={clsx(!props.toggle && 'hidden','p-2 bg-white z-40 top-[72px] border absolute right-0 md:w-1/6 md:fixed md:left-0 md:top-12 md:h-screen md:block')}>
                <ul className='p-2'>
                    <li className='p-2 font-semibold text-blue-950'>
                        <Link href='/stores' >All</Link>
                    </li>
                    <li className='p-2 font-semibold text-blue-950'>
                        <Link href='/stores?category=furniture' >Furniture</Link>
                    </li>
                    <li className='p-2 font-semibold text-blue-950'>
                        <Link href='/stores?category=electronics' >Electronics</Link>
                    </li>
                    <li className='p-2 font-semibold text-blue-950'>
                        <Link href='/stores?category=kitchen' >Kitchen Appliances</Link>
                    </li>
                    <li className='p-2 font-semibold text-blue-950'>
                        <Link href='/stores?category=beddings' >Beddings</Link>
                    </li>
                    <li className='p-2 font-semibold text-blue-950'>
                        <Link href='/stores?category=curtains' >Curtains</Link>
                    </li>
                    


                </ul>
            </nav>
  )
}

export default Sidebar
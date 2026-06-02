import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

  const [visible, setVisible] = useState(false);

  return (
    <div className='flex items-center justify-between py-5 font-medium'>

      <img src={assets.logo} className='w-36' alt="" />

      {/* Desktop menu */}
      <ul className='hidden sm:flex gap-8 text-sm text-gray-700'>

        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>HOME</p>
        </NavLink>

        <NavLink to='/collection'>
          <p>COLLECTION</p>
        </NavLink>

        <NavLink to='/about'>
          <p>ABOUT</p>
        </NavLink>

        <NavLink to='/contact'>
          <p>CONTACT</p>
        </NavLink>

      </ul>

      {/* Right icons */}
      <div className='flex items-center gap-6'>

        <img src={assets.search_icon} className='w-5 cursor-pointer' alt="" />

        <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" />

        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className='w-5' alt="" />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 h-4 flex items-center justify-center bg-black text-white rounded-full text-[8px]'>
            2
          </p>
        </Link>

        {/* Hamburger */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className='w-5 cursor-pointer sm:hidden'
          alt=""
        />

      </div>

      {/* Mobile sidebar */}
      <div className={`absolute top-0 right-0 bottom-0 bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
<div className='flex flex-col text-gray-600'>
  <div onClick={()=>setVisible(false)}className='flex items-center gap-4 p-3 cursor-pointer'>
    <img className= 'h-4 rotate-180' src={assets.dropdown_icon} alt="" />
    <p>Back</p>
  </div>
  <NavLink onClick={()=>setVisible(false)}className='py-2 pl-6 border' to='/'>HOME</NavLink>
  <NavLink onClick={()=>setVisible(false)}className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
  <NavLink onClick={()=>setVisible(false)}className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
  <NavLink onClick={()=>setVisible(false)}className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
</div>

      </div>

    </div>
  )
}

export default Navbar
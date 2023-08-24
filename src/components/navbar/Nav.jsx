import React, { useState } from 'react'
import Logo from '/assets/logosg.png'
import NavLinks from './NavLinks'

const Nav = () => {
  const [open, setOpen] = useState(false)
  return (
    <nav className="flex justify-between bg-black py-4 md:px-24 px-4 sticky top-0 z-50">
      <img src={Logo} alt="logo" className='h-9 cursor-pointer' />
      <ul className='md:flex hidden items-center gap-10' > 
        <NavLinks /> 
      </ul>

      {/* Mobile Nav */}

      <ul className={`fixed top-0 z-50 bg-black w-3/5 h-64 shadow-2xl md:hidden flex flex-col gap-4 text-medium p-10 pt-20 pb-3 duration-500 ${open ? "right-0" : "right-[-100%]"}`}>
        <NavLinks />
      </ul>
      <div className='text-white text-3xl md:hidden z-50' onClick={()=>setOpen(!open)}>
        <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>

      </div>
      

    </nav>
  )
}

export default Nav
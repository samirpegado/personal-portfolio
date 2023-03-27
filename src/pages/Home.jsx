import React from 'react'
import ProfileImg from '/assets/profile.png'

const Home = () => {
  return (
    <div id="home" className='p-[20%] md:p-[10%] h-screen grid-cols-1 md:flex-row gap-5 bg-[#191C26]'>
    <div className='flex-1 grid justify-items-center'>
      <img className=' rounded-full border-8 border-gray-600 hover:border-[14px] ease-in-out duration-300' src={ProfileImg} />
    </div>
    <div className='flex-1 grid justify-items-center'>
      <h1 className='md:text-7xl text-3xl font-semibold text-white pt-10 pb-4'>Samir Pegado</h1>
      <p className='text-gray-400 pt-4 pb-10 text-center'>Hi! Welcome to my personal website! Feel free to follow me on social media.</p>
    </div>
    <div className='text-white grid text-3xl z-50 justify-items-center gap-4 '>
      <div className='space-x-2'>
        <a href="https://www.linkedin.com/in/samir-pegado/"><ion-icon name="logo-linkedin"></ion-icon>
        </a>
        <a href="https://github.com/samirpegado">
        <ion-icon name="logo-github"></ion-icon></a>
        <a href="https://www.instagram.com/samirpegado/">
        <ion-icon name="logo-instagram"></ion-icon>
        </a>         
        <a href="https://www.facebook.com/samir.pegado/">
        <ion-icon name="logo-facebook"></ion-icon>
       </a>
      </div>
    </div>
  </div>
  )
}

export default Home
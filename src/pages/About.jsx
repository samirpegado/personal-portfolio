import React from 'react'
import Front from '../components/Front'
import Misc from '../components/Misc'
import And from '../components/And'


const About = () => {
  return (
    
    <div id='about' className='p-10 pt-24 md:p-20 md:h-max grid-cols-1 md:flex-row gap-5 bg-[#111319]'>

      <h1 className='md:text-6xl text-4xl font-semibold text-white pb-14 md:pb-24 '>About</h1>

      <p className='text-white pb-10 text-2xl'>Hi, I am <span className='font-semibold'>Samir Gomes</span> </p>

      <p className='text-gray-400 pb-10 text-l'>I am Brazilian, born in Natal/RN, and currently living in Campina Grande/PB. I am passionate about music, computing, technology, and science. For the past two years, I have been self-taught in the field of Android and Web Development.</p>

      <p className='text-white pb-10 text-2xl'><span className='font-semibold'>What are my skills?</span></p>

      <p className='text-gray-400 pb-10 text-l'>I have been honing my skills by working on projects that utilize various technologies and tools, such as:</p>

      <div>
      <div className='pb-10'>
        <img srcSet='assets/android.png' className='h-10' />
          <p className='text-white pb-6 text-xl'><span className='font-semibold'>android development</span> </p>

          <div className='md:gap-14 md:flex pb-10 grid gap-4 gap-y-10 grid-cols-4'>
            <And />          
          </div>
        </div>

        <div className='pb-10'>
          <p className='text-white pb-6 text-xl'><span className='font-semibold'>web development</span> </p>

          <div className='md:gap-14 md:flex pb-10 grid gap-4 gap-y-10 grid-cols-4'>
            <Front />          
          </div>
        </div>

        <div className='pb-10'>
          <p className='text-white pb-6 text-xl'><span className='font-semibold'>miscellaneous</span> </p>

          <div className='md:gap-14 md:flex pb-10 grid gap-4 gap-y-10 grid-cols-4'>
            <Misc />                 
          </div>
        </div>
      </div>
   </div>
  )
}

export default About
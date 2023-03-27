import React from 'react'
import Scrollbar from '../components/Scrollbar'

const Projects = () => {
  return (
    <div id="projects" className='p-10 pt-24 md:p-20 md:h-screen grid-cols-1 md:flex-row gap-5 bg-[#191C26]'>

        <h1 className='md:text-6xl text-4xl font-semibold text-white pb-14 md:pb-24 '>Projects</h1>

        <p className='text-white pb-10 text-xl'>Below are some of my most recent projects. You can view the live sites in 'Live Preview' and analyze the source code in 'View Code'.</p>

        <div>
          <Scrollbar />
        </div>

    </div>

  )
}

export default Projects
import React from 'react'
import Scrollbar from '../components/Scrollbar'

const Projects = () => {
  return (
    <div id="projects" className='p-10 pt-24 md:p-20 md:h-screen grid-cols-1 md:flex-row gap-5 bg-[#191C26]'>

        <h1 className='md:text-6xl text-4xl font-semibold text-white pb-14 md:pb-24 '>Projetos</h1>

        <p className='text-white pb-10 text-xl'>Aqui estão os meus projetos mais recentes. É possível visualizar os sites em “Live Preview” e analisar o meu código em “Ver Código”.</p>

        <div>
          <Scrollbar />
        </div>

    </div>

  )
}

export default Projects
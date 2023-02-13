import React from 'react'
import Back from '../components/Back'
import Front from '../components/Front'
import Misc from '../components/Misc'


const About = () => {
  return (
    
    <div id='about' className='p-10 pt-24 md:p-20 md:h-max grid-cols-1 md:flex-row gap-5 bg-[#111319]'>

      <h1 className='md:text-6xl text-4xl font-semibold text-white pb-14 md:pb-24 '>Sobre mim</h1>

      <p className='text-white pb-10 text-2xl'>Olá, eu sou <span className='font-semibold'>Samir Pegado</span> </p>

      <p className='text-gray-400 pb-10 text-l'>Sou Brasileiro, natural de Natal/RN, atualmente morando em Portugal. Apaixonado por música, computação, tecnologia e ciência. Há dois anos tenho voltado meus estudos, de forma autodidata, para área de Desenvolvimento Web.</p>

      <p className='text-white pb-10 text-2xl'><span className='font-semibold'>Quais são as minhas <span className='italic'>skills?</span></span></p>

      <p className='text-gray-400 pb-10 text-l'>Venho aperfeiçoando minhas habilidades desenvolvendo projetos utilizando as seguintes tecnologias e ferramentas:</p>

      <div>
        <div className='pb-10'>
          <p className='text-white pb-6 text-xl'><span className='font-semibold'>front-end</span> </p>

          <div className='md:gap-14 md:flex pb-10 grid gap-4 gap-y-10 grid-cols-4'>
            <Front />          
          </div>
        </div>

        <div className='pb-10'>
          <p className='text-white pb-6 text-xl'><span className='font-semibold'>back-end</span> </p>

          <div className='md:gap-14 md:flex pb-10 grid gap-4 gap-y-10 grid-cols-4'>
            <Back />                 
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
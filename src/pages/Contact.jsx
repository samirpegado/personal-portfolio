import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Back from '../components/Back'
import Front from '../components/Front'
import Misc from '../components/Misc'


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bcs10t3', 'template_d4a156m', form.current, 'OzdxAaStAALXJ2LlE')
      .then((result) => {
          console.log(result.text);
          alert("Message sent!")
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    
    <div id="contact" className='p-10 pt-24 md:p-20 grid-cols-1 md:flex-row gap-5 bg-[#111319] md:h-screen'>

      <h1 className='md:text-6xl text-4xl font-semibold text-white pb-14 md:pb-24 '>Contact</h1>

      <p className='text-white pb-10 text-xl'>If you are interested in discussing work or partnership opportunities, please do not hesitate to contact me. I am always open to new opportunities and would love to chat with you.</p>


      <div className='md:flex md:gap-2 md:justify-between'>
              {/* Div link contacts */}

        <div className='grid gap-3 pb-6 md:pb-0 md:w-full md:pr-10'>

          <div className='text-2xl text-white flex bg-[#191C26] items-center p-10 shadow-md shadow-neutral-900 h-4 md:h-full justify-center'>
              <a href="https://github.com/samirpegado">

              <ion-icon name="logo-github" />
              <a className='px-2'>Github</a>
              
              </a>
          </div>

          <div className='text-2xl text-white flex bg-[#191C26] items-center p-10 shadow-md shadow-neutral-900 h-4 md:h-full justify-center'>
              <a href="https://www.linkedin.com/in/samir-pegado/">

              <ion-icon name="logo-linkedin" />
              <a className='px-2'>Linkedin</a>
              
              </a>
          </div>

          <div className='text-2xl text-white flex bg-[#191C26] items-center p-10 shadow-md shadow-neutral-900 h-4 md:h-full justify-center'>
              <a href="https://flowcv.com/resume/pfcssto0ks">

              <ion-icon name="newspaper-outline" />
              <a className='px-2'>CV</a>
              
              </a>
          </div>

        </div>

          {/* E-mail box */}

        <div className='text-2xl text-white  bg-[#191C26] p-10 shadow-md shadow-neutral-900 md:w-full'>

            <h1 className='text-xl text-gray-600'>Send me an email</h1>

            <form ref={form} onSubmit={sendEmail} className='mt-6'>
              <div className='mb-2'>
                <label className='grid py-6 text-[16px]'>
                  <input type="text" name='user_name' placeholder='Name*' className='text-gray-400 bg-transparent outline-none font-semibold border-b border-gray-600 focus:border-gray-300 ease-in-out duration-300 w-full' />
                </label>
                <label className='grid py-6 text-[16px]'>
                  <input type="email" name='user_email' placeholder='Email*' className='text-gray-400 bg-transparent outline-none font-semibold border-b border-gray-600 focus:border-gray-300 ease-in-out duration-300 w-full' />
                </label>
                <label className='grid py-6 text-[16px]'>
                  <textarea type="text" name='message' placeholder='Message*' className='text-gray-400 bg-transparent outline-none font-semibold border-b border-gray-600 focus:border-gray-300 ease-in-out duration-300 w-full' />
                </label>
              </div>

              <button type="submit" value="Send" className='flex items-center bg-none hover:bg-gray-100 text-gray-300 hover:text-gray-800 text-xl py-2 px-6 border-2 border-gray-100 rounded shadow'>Submit</button>

            </form>
        </div>

      </div>


      





   </div>
  )
}

export default Contact
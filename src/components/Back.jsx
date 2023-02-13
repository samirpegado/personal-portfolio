import React from 'react'

const Back = () => {
    const Backend = [
        {
            name: "NodeJS",
            src: "assets/nodejs.svg"
        },
        {
            name: "Express",
            src: "assets/express.svg"
        },
        {
            name: "Django",
            src: "assets/django.svg"
        },
        {
            name: "MongoDB",
            src: "assets/mongodb.svg"
        },
        {
            name: "Mongoose",
            src: "assets/mongoose.svg"
        },
        {
            name: "Cloudinary",
            src: "assets/cloudinary.svg"
        },
    ]
  return (
    Backend.map((Backend, i) => (
        <div key={i} className='w-12 h-12 grid grid-cols-1 justify-items-center cursor-pointer hover:scale-110 ease-in-out duration-300'>
        <img srcSet={Backend.src} alt="" />
        <h2 className='text-white text-sm pt-2'>{Backend.name}</h2>            
    </div>
    ))

  )
}

export default Back
import React from 'react'

const Front = () => {
    const Frontend = [
        {
            name: "HTML",
            src: "assets/html5.svg"
        },
        {
            name: "CSS",
            src: "assets/css.svg"
        },
        {
            name: "Javascript",
            src: "assets/js.svg"
        },
        {
            name: "React",
            src: "assets/react.svg"
        },
        {
            name: "Vite",
            src: "assets/vite.svg"
        },
        {
            name: "Tailwind CSS",
            src: "assets/tailwind.svg"
        },
        {
            name: "Bootstrap",
            src: "assets/bootstrap.svg"
        },
    ]
  return (
    Frontend.map((Frontend, i) => (
        <div key={i} className='w-12 h-12 grid grid-cols-1 justify-items-center cursor-pointer hover:scale-110 ease-in-out duration-300'>
        <img srcSet={Frontend.src} alt="" />
        <h2 className='text-white text-sm pt-2'>{Frontend.name}</h2>            
    </div>
    ))

  )
}

export default Front
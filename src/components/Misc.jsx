import React from 'react'

const Misc = () => {
    const Miscell = [
        {
            name: "Git",
            src: "assets/git.svg"
        },
        {
            name: "Github",
            src: "assets/github.svg"
        },
        {
            name: "npm",
            src: "assets/npm.svg"
        },
        {
            name: "Python",
            src: "assets/python.svg"
        },
        {
            name: "Photoshop",
            src: "assets/photoshop.svg"
        },
        {
            name: "Linux",
            src: "assets/linux.svg"
        },
     ]
  return (
    Miscell.map((Miscell, i) => (
        <div key={i} className='w-12 h-12 grid grid-cols-1 justify-items-center cursor-pointer hover:scale-110 ease-in-out duration-300'>
        <img srcSet={Miscell.src} alt="" />
        <h2 className='text-white text-sm pt-2'>{Miscell.name}</h2>            
    </div>
    ))

  )
}

export default Misc
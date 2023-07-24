import React from 'react'

const And = () => {
    const Android = [
       
        {
            name: "Kotlin",
            src: "assets/kotlin.png"
        },
        {
            name: "Jetpack Compose",
            src: "assets/compose.png"
        },
        {
            name: "Android Studio",
            src: "assets/android-studio.png"
        },
       ,
    ]
  return (
    Android.map((Android, i) => (
        <div key={i} className='w-12 h-12 grid grid-cols-1 justify-items-center cursor-pointer hover:scale-110 ease-in-out duration-300'>
        <img srcSet={Android.src} alt="" />
        <h2 className='text-white text-sm pt-2'>{Android.name}</h2>            
    </div>
    ))

  )
}

export default And
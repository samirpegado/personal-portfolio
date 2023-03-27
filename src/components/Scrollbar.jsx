import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

  const Cards = [
    {
      title: "React Shopping Cart",
      link: "https://samirpegado.github.io/shopping-cart/#/store",
      github: "https://github.com/samirpegado/shopping-cart",
      src: "assets/card001.png"
    },
    {
      title: "React Budget App",
      link: "https://budget-app-six-mauve.vercel.app",
      github: "https://github.com/samirpegado/budget-app",
      src: "assets/card007.png"
    },
    {
      title: "Django CRUD",
      link: "http://samirpegado.pythonanywhere.com/",
      github: "https://github.com/samirpegado/desafioLEVE",
      src: "assets/card002.png"
    },
    {
      title: "Personal Portfolio",
      link: "#",
      github: "https://github.com/samirpegado/personal-portfolio",
      src: "assets/card006.png"
    },
    {
      title: "DALL-E AI MERN Clone",
      link: "#",
      github: "https://github.com/samirpegado/dall-e-mern",
      src: "assets/card003.png"
    },
    {
      title: "A Simple Calculator",
      link: "https://samirpegado.github.io/calculator/",
      github: "https://github.com/samirpegado/calculator",
      src: "assets/card004.png"
    },
    {
      title: "Tic-Tac-Toe Game",
      link: "https://samirpegado.github.io/tic-tac-toe/",
      github: "https://github.com/samirpegado/tic-tac-toe",
      src: "assets/card005.png"
    }
  ]


  const Scrollbar = () => {

  return (
    <div>
<Carousel
  additionalTransfrom={0}
  arrows
  autoPlaySpeed={300}
  centerMode={false}
  className=""
  containerClass="container"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite={true}
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop2: {
      breakpoint: {
        max: 3000,
        min: 1400
      },
      items: 4,
      partialVisibilityGutter: 40
    },
    desktop: {
      breakpoint: {
        max: 1400,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
>

{Cards.map((Cards ) => 
        <div className='inline-block rounded-xl group relative shadow-card hover:shadow-cardhover card p-3' >

          <img className='object-cover rounded-xl hover:opacity-20 hover:scale-110 ease-in-out duration-300 shadow-lg shadow-gray-900  border-4 border-hidden ' src="" alt="" srcset={Cards.src} />
          
          <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
                <p className="text-white text-sm overflow-y-auto prompt">{Cards.title}</p>

                  <div className="mt-5 flex justify-between items-center gap-2">
                    <div className="flex items-center gap-2 text-white">

                      <a href={Cards.link} className='flex items-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded aling'>
                      <ion-icon name="globe-outline" />
                      <p className='px-2 hidden md:inline'>Live Preview</p></a>

                      <a href={Cards.github} className='flex items-center bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>                 
                      <ion-icon name="logo-github" />
                      <p className='px-2 hidden md:inline'>View Code</p> 
                      </a>                  
                     </div>
                  </div>
            </div>          
        </div>
  )}




</Carousel>
    </div>
  )
}

export default Scrollbar
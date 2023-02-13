import React from 'react'
import { Link } from 'react-scroll'





const NavLinks = () => {
    const Links = [
        {
            name: "Home",
            link: "home"
        },
        {
            name: "Sobre",
            link: "about"
        },
        {
            name: "Projetos",
            link: "projects"
        },
        {
            name: "Contato",
            link: "contact"
        },
    ]
    
  return <>
  {
    Links.map((menu, i) => (
        <li key={i} className="font-semibold text-gray-200 hover:text-gray-400 cursor-pointer">
                       
                     
            <Link to={menu.link} smooth={true} duration={500}>{menu.name}</Link>
        </li>
    ))
  }
  </>
}

export default NavLinks
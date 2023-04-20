import React,{ useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo,logoNoBackground, menu, close} from '../assets'

const Navbar = () => {
  const [Active, setActive] = useState("''");
  const [Toggle, setToggle] = useState(false)

  return (
    <nav  
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={()=>{
            setActive("");
            window.scrollTo(0,0);
          }}
        >
          <img src={logoNoBackground} alt='logoNoBackground' className='w-9 h-9 object-contain'/>
          <p className='text-white text text-[18px] font-bold cursor-pointer flex'>Casanova &nbsp;<span className='sm:block hidden'>| JS mastery</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
        {navLinks.map((link)=> (
          <li
            key={link.id}
            className={`${
              Active === link.title
              ? "text-white"
              : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
          >
          <a href={`#${link.id}`}>{link.title}</a>          
          </li>
        ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'> 
            <img
              src={Toggle ? close : menu}
              alt='menu'
              className='w-[28px] h-[28px] object-contain cursor-pointer'
              onClick={()=> setToggle(!Toggle)}
            />
            <div className={`${!Toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 min-w-[140px] z-10 rounded-xl`}>
              <ul className='list-none flex justify-end items-start flex-col gap-4'>
          {navLinks.map((link)=> (
            <li
              key={link.id}
              className={`${
                Active === link.title
                ? "text-white"
                : "text-secondary"
              } hover:text-white font-poppins font-medium cursor-pointer text-[16px]`} 
              onClick={()=> {
                setToggle(!Toggle);
                setActive(link.title);
                /*trying to fix broken hover effect if you take it out completely it will, but i still want it there*/
              }}
            >
            <a href={`#${link.id}`}>{link.title}</a>          
            </li>
          ))}
          </ul>
              
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
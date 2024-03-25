import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import NavFoo from './NavFoo'

const Footer = () => {
  return (
    <div className='w-full h-[30vh] p-8 bg-black flex justify-center items-center font-semibold'>
      <div className="w-1/3">
      <div className="flex justify-center items-center gap-12">
          <a className='cursor-none' href="https://www.linkedin.com/in/sangmesh-j-365a00237/" target="_blank" rel="noreferrer">
            <AiFillLinkedin
              style={{ height: "40px", width: "40px", position: "relative" ,color:"white"}}
            />
          </a>
          <a className='cursor-none' href="https://github.com/Sangmesh0011/" target="_blank" rel="noreferrer">
            <AiFillGithub
              style={{ height: "40px", width: "40px", position: "relative",color:"white" }}
            />
          </a>
          <a className='cursor-none' href="https://www.instagram.com/sangmesh0011/" target="_blank" rel="noreferrer">
            <AiFillInstagram
              style={{ height: "40px", width: "40px", position: "relative",color:"white" }}
            />
          </a>
        </div>
      </div>
      <div className="w-2/3 flex justify-center items-center">
    <NavFoo/>
      </div>
    </div>
  )
}

export default Footer

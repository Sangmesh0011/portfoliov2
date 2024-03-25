import React from 'react'

const Button = ({name,link}) => {
  return (
    
      <a target="_blank" rel='noreferrer' className='cursor-none w-fit bg-transparent border-2 border-black px-6 py-2 text-black transition-all ease-in-out hover:bg-black hover:text-white' href={link}>{name}</a>
    
  )
}

export default Button

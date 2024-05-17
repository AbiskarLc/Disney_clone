import React from 'react'

const DropdownItems = ({menu}) => {
  return (
    <div className='flex items-center cursor-pointer hover:underline hover:decoration-gray-500  text-[18px] gap-1'>
          <menu.icon className=" text-2xl md:text-xl "/>
      <p>{menu.name.toUpperCase()}</p>
    </div>
  )
}

export default DropdownItems
import React from 'react'

const CardBackground = (props) => {
  return (
    <div className='rounded-[25px] bg-white p-4 shadow-sm'>{props.children}</div>
  )
}

export default CardBackground
import React from 'react'

function City({location}) {
  return (
    <h2 className='font-bold text-[#666666] text-2xl text-center m-4'>
        { `Weather  ${location} `}
    </h2>
  )
}

export default City
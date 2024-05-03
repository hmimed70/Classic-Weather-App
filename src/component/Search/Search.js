import React from 'react'

function Search({val, onSearch, onGetWeather ,onKEyPress}) {
  return (
    <div className='flex flex-col md:flex-row  justify-center gap-4 items-center w-2/3 my-4'>
      <input
       className='rounded-full bg-slate-100  text-slate-600 p-3  w-full md:w-1/2  outline-none mt-6
         border-black border-[1px] ' placeholder='Search City...' 
       value={val}
       onChange={(e) => onSearch(e.target.value)} 
      />
      <button  className='bg-[#87ceeb] text-md md:text-xl py-3 px-5 mt-4 rounded-md font-semibold' onClick={onGetWeather} >Get Weather</button>
    </div>
)
}

export default Search
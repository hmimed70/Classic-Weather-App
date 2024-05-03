import React from 'react'
import { formatDay, getWeatherIcon } from '../../../utils'

function Day(props) {
 const { temperatureMax, temperatureMin, time, weatherCode, isToday } = props
  return ( 
    
    <div className='bg-sky-200 rounded-md p-5 w-full flex flex-col justify-around  items-center '>
      <div className='text-center w-10 h-10 scale-150'>{getWeatherIcon(weatherCode)}</div>
      <div className='text-[##003366] mb-2 font-bold'>{isToday ? <span>Today</span> : <span>{formatDay(time)}</span>}</div>
      <div className='text font-semibold'>{`${Math.round(temperatureMin)}° - ${Math.round(temperatureMax)}°`} </div>
    </div>

  )
}

export default Day
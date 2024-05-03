import React from 'react'
import Day from './Day/Day';

function Weather({ weather}) {
   const{temperature_2m_max, temperature_2m_min,time, weathercode} = weather;
    const maxLength = Math.min(
        temperature_2m_max.length,
        temperature_2m_min.length,
        time.length,
        weathercode.length
      );
    return (
    <div className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-7 w-2/3 mt-4 gap-4'>
         
         {[...Array(maxLength)].map((_, index) => (
        <Day
          key={index}
          temperatureMax={temperature_2m_max[index]}
          temperatureMin={temperature_2m_min[index]}
          time={time[index]}
          weatherCode={weathercode[index]}
          isToday={index===0}
        />
      ))}
    </div>  
    )
}

export default Weather
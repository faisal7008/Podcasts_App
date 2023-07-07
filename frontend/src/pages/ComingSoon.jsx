import React from 'react'
import comingSoon from '../assets/searchlogo.svg'

export default function ComingSoon() {
  return (
    <div className='flex w-full h-full justify-center items-center'>
        <img className='p-2 md:w-1/2' src={comingSoon} alt="upcoming" />
    </div>
  )
}

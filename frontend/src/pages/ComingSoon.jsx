import React from 'react'
import { comingSoonImg } from '../assets'

export default function ComingSoon() {
  return (
    <div className='flex w-full h-full justify-center items-center'>
        <img className='p-2 md:w-1/2' src={comingSoonImg} alt="upcoming" />
    </div>
  )
}

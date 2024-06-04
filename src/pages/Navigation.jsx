import React from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div className='flex space-x-8 items-center pl-5 py-3 bg-black'>
        <Link to="/"><img src={Logo} /></Link>
        <Link to="/" className='text-white text-1xl font-bold hover:text-blue-500'>Movies</Link>
        <Link to="/watchlist" className='text-white text-1xl font-bold hover:text-blue-500'>WatchList</Link>
    </div>
  )
}

export default Navigation
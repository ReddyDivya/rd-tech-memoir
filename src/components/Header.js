import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className="bg-blue-500 p-4 text-white">
        <h1 className="text-2xl font-bold">Tech Memoir</h1>
        <Navbar/>
    </header>
  )
}

export default Header
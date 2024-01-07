import React from 'react'
import { Link } from 'react-router-dom'
import LoginButton from './LoginButton'
import DarkModeToggle from './DarkModeToggle'
import SocialIcons from './SocialIcons'
import PostList from './PostList'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mt-4">
        <div className="space-x-4">
            <Link to="/">Home</Link>
            <Link to="/analytics">Analytics</Link>
        </div>
        <div className="space-x-4 flex items-center">
            <SocialIcons/>
            <DarkModeToggle/>
            <LoginButton/>
            {/* <PostList/> */}
        </div>  
    </nav>
  )
}

export default Navbar
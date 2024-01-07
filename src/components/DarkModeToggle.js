import React from 'react'
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
// import { useQueryClient } from 'react-query';

const DarkModeToggle = () => {
//   const queryClient = useQueryClient();

  //implement dark mode toggle
  const toggleDarkMode = () => {

  }

  return (
    <div>
        <FaMoon onClick={toggleDarkMode}/>
        {/* <IoSunny/> */}
    </div>
  )
}

export default DarkModeToggle
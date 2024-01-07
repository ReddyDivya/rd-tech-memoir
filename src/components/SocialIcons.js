import React from 'react'
import { FaTwitter, FaGithub } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className="space-x-4 flex justify-between">
        <a href="https://twitter.com/thedivyareddyy" title="Twitter"><FaTwitter size={20}/></a>
        <a href="https://github.com/ReddyDivya" title="GitHub"><FaGithub size={20}/></a>
    </div>
  )
}

export default SocialIcons
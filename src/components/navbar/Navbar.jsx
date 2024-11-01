import React from 'react'
import DarkMode from './DarkMode'
function Navbar() {
  return (
    <div>
        <div className='flex justify-between dark:bg-black items-center px-20 h-14 w-screen fixed top-0 left-0'>
            <div>
                <h2 className=" font-bold text-2xl text-blue-400  cursor-pointer">CityExplorer</h2>

            </div>
            <div className='mt-2'>
              <DarkMode />
            </div>
        </div>

    </div>
  )
}

export default Navbar




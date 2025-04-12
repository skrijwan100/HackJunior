import React from 'react'
import logo from "../assets/Hackjunior_logo.png"
const Navbar = () => {
    return (
        <nav className='w-full h-16 flex items-center justify-between paLR bg-[#0a1029] text-white'>
            <div className="logo h-12 w-12 rounded-full overflow-hidden flex item  justify-center">
                <img src={logo} className='w-full h-full object-cover' />
            </div>
            <ul className=" flex items-center justify-between gap-4" >
                <li className='navlink cursor-pointer'>Home</li>
                <li className='navlink cursor-pointer'>About</li>
                <li className='navlink cursor-pointer'>Q.&.A</li>
                <li className='navlink cursor-pointer'>Register</li>
            </ul>
        </nav>
    )
}

export default Navbar
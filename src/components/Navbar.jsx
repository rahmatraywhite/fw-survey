import React from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className='bg-[#253A59] py-2 px-[40px] w-full'>
            <div className='bg-[#E1E1E1] border-[#000] flex justify-center p-1 w-[210px] h-[60px] border-2'>
                <Link to='/' className='cursor-pointer'>
                    <img src={logo} className='w-[170px]' alt="Vokasi UB" />
                </Link>
            </div>
        </nav>
    )
}

export default Navbar

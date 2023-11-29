import React from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className='bg-[#253A59] py-3 px-[40px] w-full'>
            <div className='bg-[#E1E1E1] border-[#000] flex justify-center p-1 w-[309px] h-[86px] border-2'>
                <Link to='/'>
                    <img src={logo} alt="Vokasi UB" />
                </Link>
            </div>
        </nav>
    )
}

export default Navbar

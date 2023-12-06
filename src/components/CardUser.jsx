import React from 'react'
import { FiUsers } from "react-icons/fi";

const CardUser = (props) => {
    const { name, length } = props;
    return (
        <div className='w-[280px] md:w-[320px] bg-[#D9D9D9] p-4 rounded-md'>
            <p className='flex text-2xl items-center font-semibold gap-3'>
                <span>{name}</span>
                <FiUsers />
            </p>
            <p className='text-xl font-medium'>{length}</p>
        </div>
    )
}

export default CardUser

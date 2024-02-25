import React from 'react'
import { useNavigate } from 'react-router-dom'
import Productivity from './Productivity';


const NavbarMain = () => {
    const navigate = useNavigate();

    const Prod=()=>{
navigate('/Productivity')
    }
    return (
        <>
            <div className='max-w-md h-16  bg-transparent backdrop-blur-sm border  rounded-full flex flex-row justify-between px-5 items-center'>
                <a className='text-xl ml-2 mr-2 font-thin cursor-pointer  text-white'>Focus Room</a>
                <a className='text-xl ml-2 mr-2 font-bold  text-white'>Quasar</a>
                <a className='text-xl ml-2 mr-2 font-thin cursor-pointer     text-white' onClick={Prod}>Productivity</a>
            </div>
        </>
    )
}
export default NavbarMain
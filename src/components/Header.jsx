import React from 'react'
import call from '../icons/topbar/call.png';
import support from '../icons/topbar/support.png';
import back from '../icons/media/back.png';

export default function Header() {
    return (
        <div className='w-screen font-monts sb flex '>
            <div className='flex md:text-3xl sm:text-2xl mt-[2rem] sm:ml-5 md:ml-12'>
                <img src = {back} alt = "back" className='md:w-7 md:h-7 sm:h-6 bg-slate-200 p-1 rounded-lg mt-1 mr-2'/>
                <h2>Basic Mathematics</h2>
            </div>
            <div className='flex sm:mt-[1rem]  md:mt-[2rem] sm:mr-[1rem]  md:mr-[12rem] sm:text-xs md:text-base sm:space-x-1 md:space-x-5'>
                <img src={call} alt="call" className='md:w-7 md:h-7 sm:w-10 sm:h-10' />
                <p className='font-poppins  '>Call Teacher</p>
                <img src={support} alt="support" className='md:w-7 md:h-7 sm:w-10 sm:h-10' />
                <p className='font-poppins  '>Support</p>
            </div>
        </div>
    )
}

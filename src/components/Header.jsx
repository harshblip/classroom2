import React from 'react'

export default function Header() {
    return (
        <div className='w-screen font-monts sb flex border border-black'>
            <div className='md:text-4xl sm:text-2xl mt-[2rem] sm:ml-5 md:ml-12'>
                <h2>Basic Mathematics</h2>
            </div>
            <div className = 'flex sm:mt-[1rem]  md:mt-[2rem] sm:mr-[1rem]  md:mr-[12rem] sm:text-xs md:text-lg sm:space-x-1 md:space-x-5'>
                <p>Call Teacher</p>
                <p>Support</p>
            </div>
        </div>
    )
}

import React from 'react'
import Header from './Header'
import YouTube from './Youtube'
import Studentsoncall from './Studentsoncall'
import Topbar from './Topbar'

export default function Content() {
    return (
        <div className='flex flex-col'>
            <div className='absolute max-w-screen'>
                <Header />
                <Topbar />
            </div>
            <div className='flex flex-wrap mt-[12rem] '>
                <Studentsoncall />
                <YouTube />
            </div>
            <div className = 'absolute bottom-0'>
                heilo
            </div>
        </div>
    )
}

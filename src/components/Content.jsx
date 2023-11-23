import React from 'react'
import Header from './Header'
import YouTube from './Youtube'
import Studentsoncall from './Studentsoncall'

export default function Content() {
    return (
        <div className='flex flex-col'>
            <div className='absolute max-w-screen'>
                <Header />
            </div>
            <div className='flex mt-[8rem] right-0 absolute'>
                <Studentsoncall />
                <YouTube />
            </div>
            <div>
                heilo
            </div>
        </div>
    )
}

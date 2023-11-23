import React from 'react'
import Header from './Header'
import YouTube from './Youtube'
import Studentsoncall from './Studentsoncall'

export default function Content() {
    return (
        <div className='flex'>
            <Header />
            <div className = 'right-0'>
                <Studentsoncall />
                <YouTube />
            </div>
        </div>
    )
}

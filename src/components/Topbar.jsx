import React from 'react'
import document from '../icons/topbar/document.png';
import file from '../icons/topbar/file.png';
import slideshow from '../icons/topbar/slideshow.png'
import video from '../icons/topbar/video.png';
import video2 from '../icons/topbar/video2.png';
import whitboard from '../icons/topbar/whiteboard.png';
import classroom from '../icons/topbar/classroom.png';

export default function Topbar() {
    return (
        <div className='sm:space-x-32  md:space-x-10 sm:w-screen sm:mr-0 md:w-[80vw] font-monts mt-5 md:ml-16  p-5 rounded-3xl flex flex-row overflow-auto  bg-[#ebeaea] text-slate-500 fw h-12 absolute text-sm '>
            <button className='flex md:ml-16 md:-mt-2'>
                <img src={classroom} alt="classroom" className='md:w-7 md:h-7 sm:w-10 sm:h-10 md:-mt-1 sm:-mt-2' />
                <p className='ml-2'> Classroom </p>
            </button>
            <button className='flex md:-mt-2'>
                <img src={whitboard} alt="whiteboard" className='md:w-7 md:h-7 sm:w-10 sm:h-10 md:-mt-1 sm:-mt-2' />
                <p className='ml-2'> Whiteboard </p>
            </button>
            <button className='flex md:-mt-2'>
                <div className='flex bt'>
                    <img src={video} alt="video" className=' md:w-7 md:h-7 sm:w-10 sm:h-10 md:mt-1   ml-5 sm:mt-2' />
                    <p className='ml-2 mt-[0.5rem] text-black'> Videos </p>
                </div>
            </button>
            <button className='flex md:-mt-2'>
                <img src={slideshow} alt="slideshow" className='md:w-7 md:h-7 md:-mt-1 sm:w-10 sm:h-10 sm:-mt-2' />
                <p className='ml-2'> Slideshow </p>
            </button>
            <button className='flex md:-mt-2'>
                <img src={document} alt="document" className='md:w-7 md:h-7 md:-mt-1 sm:w-10 sm:h-10 sm:-mt-2' />
                <p className='ml-2'> Documents </p>
            </button>
            <button className='flex md:-mt-2'>
                <img src={file} alt="file" className='absolute md:w-8 md:h-8 sm:w-10 sm:h-10 md:-mt-1 sm:-mt-2' />
                <img src={video2} alt="document" className='ml-[0.5rem] mt-2 md:w-4 md:h-4 sm:w-10 sm:h-10 md:mt-[0.3rem]' />
                <p className='ml-2 mr-16'> Doc.Cam </p>
            </button>
        </div>
    )
}

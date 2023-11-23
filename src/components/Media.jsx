import React from 'react'
import cam from '../icons/media/vcam.png';
import mic from '../icons/media/mic.png';
import share from '../icons/media/share.png';
import chat from '../icons/media/chat.png';
import leave from '../icons/media/exit.png';

export default function Media() {
    return (
        <div className='flex flex-wrap grid-container space-x-1'>
            <div className='flex flex-col'>
                <div>
                    <button className=' bg-slate-200 p-2 rounded-xl'>
                        <img src={cam} alt="vcam" className='md:w-7 md:h-7 sm:h-8' />
                    </button>
                </div>
                <div>
                    <p className = 'text-xs font-poppins font-bold ml-1 mt-1'>Cam</p>
                </div>
            </div>
            <div className='flex flex-col'>
                <div>
                    <button className=' bg-slate-200 p-2 rounded-xl'>
                        <img src={mic} alt="microphone" className=' md:w-7 md:h-7 sm:h-8' />
                    </button>
                </div>
                <div>
                    <p className = 'text-xs font-poppins font-bold ml-3 mt-1'>Mic</p>
                </div>
            </div>
            <div className='flex flex-col'>
                <div>
                    <button className=' bg-slate-200 p-2 rounded-xl'>
                        <img src={share} alt="share" className=' md:w-7 md:h-7 sm:h-8' />
                    </button>
                </div>
                <div>
                    <p className = 'text-xs font-poppins font-bold ml-1 mt-1'>Share</p>
                </div>
            </div>
            <div className='flex flex-col'>
                <div>
                    <button className=' bg-slate-200 p-2 rounded-xl'>
                        <img src={chat} alt="chat" className=' md:w-7 md:h-7 sm:h-8' />
                    </button>
                </div>
                <div>
                    <p className = 'text-xs font-poppins font-bold ml-1 mt-1'>Chat</p>
                </div>
            </div>
            <div className='flex flex-col'>
                <div>
                    <button className=' bg-blue-400  p-2 rounded-xl'>
                        <img src={leave} alt="exit" className=' md:w-7 md:h-7 sm:h-8' />
                    </button>
                </div>
                <div>
                    <p className = 'text-xs font-poppins font-bold ml-1 mt-1'>Leave</p>
                </div>
            </div>
        </div>
    )
}

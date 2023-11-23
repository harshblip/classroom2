import React from 'react'
import Logo from '../icons/sidebar/wLogo.png';
import meter from '../icons/sidebar/meter.png';
import checkboard from '../icons/sidebar/pass.png';
import eye from '../icons/sidebar/eye.png';
import peepal from '../icons/sidebar/users.png';
import stats1 from '../icons/sidebar/stts.png';
import graph from '../icons/sidebar/graph.png';
import Bell from '../icons/sidebar/notifBell.svg';

export default function Sidebar() {
  return (
    <div className='md:left-0 max-[640px]:top-0 bg-[#ebeaea] md:w-24 md:h-screen max-[640px]:w-screen max-[640px]:h-[5rem]  flex md:flex-col sm:flex-row overflow-auto'>
      <img
        src={Logo}
        className='sm:mt-[0.1rem] md:mt-[0.7rem] ml-[0.5rem] md:w-15 md:h-15 sm:w-20 sm:h-20' alt="logo"
      />
      <div className='md:-mt-8 flex md:flex-col sm:flex-row overflow-auto sm:ml-[1.5rem] md:ml-[0.5rem] sm:space-x-20 md:space-x-6 md:bg-transparent sm:bg-white-500'>
        <button>
          <img
            src={graph}
            className='sm:mt-0  md:mt-[3rem] sm:ml-[1.5rem] md:ml-[1.5rem] md:w-7 md:h-7 sm:h-6 ' alt="graph"
          />
        </button>
        <button>
          <img src={Bell} className='sm:mt-0  md:mt-[3rem] sm:ml-[1.5rem] md:ml-[0rem] md:w-7 md:h-7 sm:h-6' alt="stats" /></button>
        <button>
          <img
            src={stats1}
            className='sm:mt-0  md:mt-[3rem] sm:ml-[1.5rem]  md:ml-[0rem] md:w-7 md:h-7 sm:h-6' alt="stats"
          />
        </button>
        <button>
          <img
            src={meter}
            className='sm:mt-0 md:mt-[3rem] sm:ml-[1.5rem]  md:ml-[0rem] md:w-7 md:h-7 sm:h-6' alt="meter"
          />
        </button>
        <button>
          <img
            src={checkboard}
            className='sm:mt-0 md:mt-[3rem] sm:ml-[1.5rem]  md:ml-[0rem] md:w-30 md:w-7 md:h-7 sm:h-6' alt="checkboard"
          />
        </button>
        <button>
          <img
            src={eye}
            className='sm:mt-0 md:mt-[3rem]  md:w-30 md:w-7 md:h-7 sm:h-6 sm:ml-[1.5rem]  md:ml-[0rem]' alt="eye"
          />
        </button>
        <button>
          <img
            src={peepal}
            className='sm:mt-0 md:mt-[3rem] sm:ml-[1.5rem]  md:ml-[0rem] md:w-30 md:w-7 md:h-7 sm:h-6' alt="peepal" />
        </button>
      </div>
    </div>
  )
}
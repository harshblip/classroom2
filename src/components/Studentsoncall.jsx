import React from 'react';
import studentsData from '../students.json';

export default function Studentsoncall() {
    return (
        <div>
            <ul className=''>
                {studentsData.map(student => (
                    <li key={student.id} className='md:ml-16 mt-5'>
                        <img src={student.image} alt={student.name} className=' md:h-32 md:w-52 rounded-xl flex flex-wrap sm:h-28 sm:ml-5 md:ml-0' />
                        <p className=' -mt-8 text-xs  bg-slate-200 p-2 rounded-lg font-monts sn  absolute'>{student.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

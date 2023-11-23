import React from 'react';
import studentsData from '../students.json';

export default function Studentsoncall() {
    return (
        <div>
            <ul>
                {studentsData.map(student => (
                    <li key={student.id}>
                        <img src={student.image} alt={student.name}  className = ' md:h-32 rounded-xl absolute' />
                        <p className = 'relative right-0'>{student.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

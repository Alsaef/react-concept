import React from 'react';
import logo from './assets/icons/logo.png'
const Student = ({students}) => {
    console.log(students);
    return (
        <div>
            <h2>This is Student List</h2>

            <div>
                {
                   students.map(student=>(
                    <div>
                        <h2>{student.name}</h2>
                        <h2>{student.age}</h2>
                    </div>
                   )) 
                }
            </div>
        </div>
    );
};

export default Student;
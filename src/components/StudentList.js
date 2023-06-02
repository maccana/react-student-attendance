import React from 'react';
import StudentAttendanceItem from './StudentAttendanceItem';

const StudentList = ({ students, onAttendanceChange }) => {
    return (
        <div>
            <h2>Student List</h2>
            {students.map((student) => (
                <StudentAttendanceItem
                    key={student.id}
                    student={student}
                    onAttendanceChange={onAttendanceChange}
                />
            ))}
        </div>
    );
};

export default StudentList;

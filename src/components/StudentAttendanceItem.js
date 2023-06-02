import React, { useState } from 'react';

const StudentAttendanceItem = ({ student, onAttendanceChange }) => {
  // const [attendance, setAttendance] = useState(student.attendance);
  // const handleAttendanceChange = (value) => {
  //   alert('too...')
  //   setAttendance(value);
  //   onAttendanceChange(student.id, value);
  // };

  return (
    <div>
      <h3>{student.name}</h3>
      <label>
        Present:
        <input
          type="radio"
          value="present"
          checked={student.attendance === 'present'}
          onChange={() => onAttendanceChange(student.id, 'present')}
        />
      </label>
      <label>
        Absent:
        <input
          type="radio"
          value="absent"
          checked={student.attendance === 'absent'}
          onChange={() => onAttendanceChange(student.id, 'absent')}
        />
      </label>
    </div>
  );
};

export default StudentAttendanceItem;

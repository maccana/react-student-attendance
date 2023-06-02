import React, { useEffect, useState } from 'react';
import ClassOutcomeStatus from './ClassOutcomeStatus';
import StudentAttendanceItem from './StudentAttendanceItem';

const ClassAttendanceForm = () => {
    const [students, setStudents] = useState([
        { id: 1, name: 'John', attendance: null },
        { id: 2, name: 'Jane', attendance: null },
        // Add more students as needed
    ]);
    const [classOutcome, setClassOutcome] = useState('')
    const [isFormValid, setIsFormValid] = useState(false)



    const handleAttendanceChange = (studentId, attendance) => {
        const s = students[studentId]
        console.log(s, attendance)
        setStudents((prevStudents) => {
            const updatedStudents = prevStudents.map((student) => {
                if (student.id === studentId) {
                    return { ...student, attendance };
                }
                return student;
            });
            console.log(updatedStudents)
            return updatedStudents
        });
    };

    // Make API calls here 
    const handleSubmit = () => {
        if (!isFormValid) {
            alert('Attendance must be completed...')
            return
        }
        console.log(students)
        const outcome = { status: classOutcome }
        console.log(outcome)
        students.forEach((s) => {
            setTimeout(() => {
                console.log('Sending Attendance...please wait...', s)
            }, 3000)
        })

        if (outcomeOptions.length === 1) {
            console.log('DONE -> ', classOutcome)
        }
    }

    useEffect(() => {
        const hasMissingAttendance = students.some((student) => student.attendance === null);
        console.log('Attendance status missing -> ', hasMissingAttendance) // initially true
        if (!hasMissingAttendance && classOutcome !== '') {
            setIsFormValid(true)
        }

        const allAbsent = students.every((student) => student.attendance === 'absent');
        const outcomeOptions = allAbsent
            ? ['Postponed by Student', 'Postponed By Teacher', 'LMC', 'NS', 'H'] // Different options for all students absent
            : ['Done']; // Only 'Done' option if at least one student present
        setOutcomeOptions(outcomeOptions);
        console.log('Outcome in useEffect: ', classOutcome)
    }, [students, classOutcome, isFormValid]);

    const [outcomeOptions, setOutcomeOptions] = useState([]);

    const handleOutcomeChange = (e) => {
        if (outcomeOptions.length > 1) {
            console.log('OO -> ', outcomeOptions)
        }
        console.log(e.target.value)
        setClassOutcome(e.target.value)
        console.log('set : ', classOutcome)

        // const eventJSON = JSON.stringify(e)
        // alert(`do something here.... ${eventJSON}`)
        // const selectedOption = event.target.value;
        // Perform the necessary action based on the selected option
        // console.log('Selected Option:', selectedOption);
    };

    return (
        <div>
            <h2>Class Attendance Form</h2>
            {students.map((student) => (
                <StudentAttendanceItem
                    key={student.id}
                    student={student}
                    onAttendanceChange={handleAttendanceChange}
                />
            ))}
            <ClassOutcomeStatus students={students} outcomeOptions={outcomeOptions} onOutcomeChange={handleOutcomeChange} />
            <button type="submit" onClick={handleSubmit} disabled={!isFormValid}>Submit</button>
        </div>
    );
};


export default ClassAttendanceForm;

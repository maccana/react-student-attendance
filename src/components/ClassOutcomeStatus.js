import React, { useEffect, useState } from 'react';

const ClassOutcomeStatus = ({ students, onOutcomeChange }) => {
    const [outcomeOptions, setOutcomeOptions] = useState([]);

    useEffect(() => {
        const updateOutcomeOptions = () => {
            const allAbsent = students.every((student) => student.attendance === 'absent');
            const options = allAbsent
                ? ['PT', 'PS', 'NS', 'LMC', 'H'] // Different options for all students absent
                : ['Done']; // Only 'Done' option available if at least one student present
            setOutcomeOptions(options);
        };

        updateOutcomeOptions();
    }, [students]);

    // const handleOutcomeChange = (event) => {
    //     const selectedOption = event.target.value;
    //     // Perform the necessary action based on the selected option
    //     console.log('Selected Option:', selectedOption);
    // };

    return (
        <div style={{ marginBottom: '20px' }}>
            <h3>Class Outcome Status</h3>
            <label style={{ marginRight: '10px' }}>
                Outcome:
            </label>
            <select onChange={onOutcomeChange}>
                <option value="">
                    Select an outcome
                </option>
                {outcomeOptions.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ClassOutcomeStatus;

import React, {useState} from 'react';


export default function School() {
    const [highSchool, setHighSchool] = useState("")
    const {college, setCollege} = useState("")

    let highSchoolInput = document.getElementById('highSchoolBox')
    let collegeInput = document.getElementById('collegeBox')

    let highSchoolOut = document.getElementById('highSchoolOut')
    let collegeOut = document.getElementById('collegeOut')

    function handleHighSchool(e) {
        setHighSchool(e.target.value)
    }

    function handleCollege(e) {
        setCollege(e.target.value)
    }

    function handleSchoolSubmit() {
        let schoolSubmit = document.getElementById('schoolSubmit');
        
        schoolSubmit.textContent = 'Edit';

        highSchoolOut.textContent = 'High School Name: ' +  highSchoolInput.value;
        collegeOut.textContent = 'College Name: ' + collegeInput.value;
    }

    function handleSchoolReset() {
        schoolSubmit.textContent = 'Submit'
        setHighSchool('')
        setCollege('')

    }

    return (
        <div class='schoolInfo'>
            <div class='schoolInput'>
                <h2>School Information:</h2>
                <div class='highSchool'>
                    <div>High School:</div>
                    <input id='highSchoolBox' onChange={handleHighSchool} value={highSchool} type="text" />
                </div>
                <div class='college'>
                    <div>College:</div>
                    <input id='collegeBox' onChange={handleCollege} value={college} type="text" />
                </div>
                <button onClick={handleSchoolSubmit} id='schoolSubmit'>Submit</button>
                <button onClick={handleSchoolReset} id='schoolReset'>Reset</button>
            </div>
        </div>
    )
}

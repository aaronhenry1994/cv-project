import React, {useState} from 'react';

export default function School() {
    const [highSchool, setHighSchool] = useState('')
    const {college, setCollege} = useState('')

    function handleHighSchool(e) {
        setHighSchool(e.target.value)
    }

    function handleCollege(e) {
        setCollege(e.target.value)
    }



    function handleSchoolSubmit() {
        let highSchoolInput = document.getElementById('highSchoolBox');
        let highSchoolOutput = document.getElementById('highSchoolOutputText');

        let collegeInput = document.getElementById('collegeBox')
        let collegeOutput = document.getElementById('collegeOutputText');

        highSchoolOutput.textContent = highSchoolInput.value;
        collegeOutput.textContent = collegeInput.value;
    }

    return (
        <div class='schoolInfo'>
            <h2>School Information:</h2>
            <div class='schoolInput'>
                <div class='highSchool'>
                    <div>High School:</div>
                    <input id='highSchoolBox' onChange={handleHighSchool} value={highSchool} type="text" />
                </div>
                <div class='college'>
                    <div>College:</div>
                    <input id='collegeBox' onChange={handleCollege} value={college} type="text" />
                </div>
                <button id='schoolSubmit' onClick={handleSchoolSubmit}>Submit</button>
                <button id='schoolReset'>Reset</button>
            </div>
            <div class='schoolOutput'>
                <h2 class='outputText'>School Information:</h2>
                <div class='highSchoolOut'>
                    <div class='outputText'>High School:</div>
                    <div id='highSchoolOutputText'></div>
                </div>
                <div class='collegeOut'>
                    <div class='outputText'>College:</div>
                    <div id='collegeOutputText'></div>
                </div>
            </div>
        </div>
    )
}

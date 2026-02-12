import React, {useState} from 'react';

export default function Work() {
    const [employer1, setEmployer1] = useState('')
    const [job1, setJob1] = useState('')
    const [job1Desc, setJob1Desc] = useState('')

    const [employer2, setEmployer2] = useState('')
    const [job2, setJob2] = useState('')
    const [job2Desc, setJob2Desc] = useState('')

    const [employer3, setEmployer3] = useState('')
    const [job3, setJob3] = useState('')
    const [job3Desc, setJob3Desc] = useState('')

    let employer1Box = document.getElementById('employer1')
    let job1Box = document.getElementById('job1Input')
    let job1ParaBox = document.getElementById('job1Para')

    let employer1Out = document.getElementById('employer1Out')
    let job1Title = document.getElementById('job1Title')
    let job1Duties = document.getElementById('job1Desc')

    let employer2Box = document.getElementById('employer2')
    let job2Box = document.getElementById('job2Input')
    let job2ParaBox = document.getElementById('job2Para')

    let employer2Out = document.getElementById('employer2Out')
    let job2Title = document.getElementById('job2Title')
    let job2Duties = document.getElementById('job2Desc')

    let employer3Box = document.getElementById('employer3')
    let job3Box = document.getElementById('job3Input')
    let job3ParaBox = document.getElementById('job3Para')

    let employer3Out = document.getElementById('employer3Out')
    let job3Title = document.getElementById('job3Title')
    let job3Duties = document.getElementById('job3Desc')

    function handleEmployer1(e) {
        setEmployer1(e.target.value)
    }

    function handleJob1(e) {
        setJob1(e.target.value)
    }

    function handleJob1Desc(e) {
        setJob1Desc(e.target.value)
    }

    function handleEmployer2(e) {
        setEmployer2(e.target.value)
    }

    function handleJob2(e) {
        setJob2(e.target.value)
    }

    function handleJob2Desc(e) {
        setJob2Desc(e.target.value)
    }

    function handleEmployer3(e) {
        setEmployer3(e.target.value)
    }

    function handleJob3(e) {
        setJob3(e.target.value)
    }

    function handleJob3Desc(e) {
        setJob3Desc(e.target.value)
    }

    function handleWorkSub() {
        let workSubBtn = document.getElementById('workSubmit')
        workSubBtn.textContent = 'Edit'

        employer1Out.textContent = 'Employer: ' + employer1Box.value
        job1Title.textContent = 'Title: ' + job1Box.value
        job1Duties.textContent = job1ParaBox.value

        employer2Out.textContent = 'Employer: ' + employer2Box.value
        job2Title.textContent = 'Title: ' + job2Box.value
        job2Duties.textContent = job2ParaBox.value

        employer3Out.textContent = 'Employer: ' + employer3Box.value
        job3Title.textContent = 'Title: ' + job3Box.value
        job3Duties.textContent = job3ParaBox.value
    }

    function handleWorkReset() {
        workSubBtn.textContent = 'Submit'


    }



    return (
        <div class='workInput'>
            <h2>Work Experience: </h2>
            <div id='job1'>
                <div>Job Number One:</div>
                <input placeholder='Employer?' value={employer1} onChange={handleEmployer1} id='employer1' type="text" />
                <input placeholder='Job Title?' value={job1} onChange={handleJob1} id='job1Input' type="text" />
                <textarea placeholder='What did you do?' value={job1Desc} onChange={handleJob1Desc} id='job1Para'></textarea>
            </div>
            <div id='job2'>
                <div>Job Number Two:</div>
                <input placeholder='Employer?' value={employer2} onChange={handleEmployer2} id='employer2' type="text" />
                <input placeholder='Job Title?' value={job2} onChange={handleJob2} id='job2Input' type="text" />
                <textarea placeholder='What did you do?' value={job2Desc} onChange={handleJob2Desc} id="job2Para"></textarea>
            </div>
            <div id='job3'>
                <div>Job Number Three:</div>
                <input placeholder='Employer?' value={employer3} onChange={handleEmployer3} id='employer3' type="text" />
                <input placeholder='Job Title?' value={job3} onChange={handleJob3} id='job3Input' type="text" />
                <textarea placeholder='What did you do?' value={job3Desc} onChange={handleJob3Desc} id="job3Para"></textarea>
            </div>
            <div id='btns'>
                <button onClick={handleWorkSub} id='workSubmit'>Submit</button>
                <button onClick={handleWorkReset} id='workReset'>Reset</button>
            </div>
        </div>
    )
}
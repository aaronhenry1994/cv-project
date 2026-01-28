import React, {useState} from 'react';

export default function Name() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [submitted, setIsSubmitted] = useState(false);

    let nameBox = document.getElementById('nameBox')
    let phoneBox = document.getElementById('phoneBox')
    let emailBox = document.getElementById('emailBox')

    let nameNode = document.getElementById('nameParent')
    let phoneNode = document.getElementById('phoneParent')
    let emailNode = document.getElementById('emailParent')


    function handleName(e) {
        setName(e.target.value)
    };

    function handlePhone(e) {
        setPhone(e.target.value)
    }

    function handleEmail(e) {
        setEmail(e.target.value)
    }

    function handleSubmit() {
        let submitBtn = document.getElementById('submitBtn')
        submitBtn.innerText = 'Edit'

        let resumeH = document.createElement('h2')
        resumeH.textContent = "Resume"
        resumeH.id = 'resumeH'

        let personal = document.createElement('h3')
        personal.textContent = 'Personal Information'
        personal.id = 'personal'

        let nameP = document.getElementById('nameP')
        nameP.textContent = nameBox.value

        let phoneP = document.getElementById('phoneP')
        phoneP.textContent = phoneBox.value

        let emailP = document.getElementById('emailP')
        emailP.textContent = emailBox.value


        nameP.textContent = nameBox.value
        phoneP.textContent = phoneBox.value
        emailP.textContent = emailBox.value
        

    }

    function handleReset() {
        setName('')
        setPhone('')
        setEmail('')
        submitBtn.innerText = 'Submit'

        let nameP = document.getElementById('nameP')
        nameP.textContent = ''

        let phoneP = document.getElementById('phoneP')
        phoneP.textContent = ''

        let emailP = document.getElementById('emailP')
        emailP.textContent = ''

    }

    return (
        <div id='bigParent'>
        <div className="Personal" id='parent'>
            <div className="name" id='nameParent'>
                <h2>Name:</h2>
                <input type="text" id='nameBox' value={name} onChange={handleName}/>
            </div>
            <div className="phone" id='phoneParent'>
                <h2>Phone Number:</h2>
                <input type="text" id='phoneBox' value={phone} onChange={handlePhone}/>
            </div>
            <div className="email" id='emailParent'>
                <h2>Email</h2>
                <input type="text" id='emailBox' value={email}  onChange={handleEmail}/>
            </div>
            <button id='submitBtn' onClick={handleSubmit}>Submit</button>
            <button onClick={handleReset}>Reset</button>
            <div id='resume'>
                <h2>Personal Information:</h2>
                <div id='nameP'></div>
                <div id='phoneP'></div>
                <div id='emailP'></div>
            </div>
        </div>
        </div>
    )
}
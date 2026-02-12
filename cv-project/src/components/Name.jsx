import React, {useState} from 'react';

export default function Name() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    let nameBox = document.getElementById('nameBox')
    let phoneBox = document.getElementById('phoneBox')
    let emailBox = document.getElementById('emailBox')

    let nameTarget = document.getElementById('nameOut')
    let phoneTarget = document.getElementById('phoneOut')
    let emailTarget = document.getElementById('emailOut')


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

        nameTarget.textContent = 'Name:' + ' ' + nameBox.value
        phoneTarget.textContent = 'Phone Number: ' +  phoneBox.value
        emailTarget.textContent = 'Email Address: ' + emailBox.value
        

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
        <div class='personal'>
            <div class='input'>
                 <h2>Personal Information:</h2>
            <div class="name" id='nameParent'>
                <h2>Name:</h2>
                <input type="text" id='nameBox' value={name} onChange={handleName}/>
            </div>
            <div class="phone" id='phoneParent'>
                <h2>Phone Number:</h2>
                <input type="text" id='phoneBox' value={phone} onChange={handlePhone}/>
            </div>
            <div class="email" id='emailParent'>
                <h2>Email</h2>
                <input type="text" id='emailBox' value={email}  onChange={handleEmail}/>
            </div>
            <button id='submitBtn' onClick={handleSubmit}>Submit</button>
            <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}
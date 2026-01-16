import React, {useState} from 'react';

function Name() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [submitted, setIsSubmitted] = useState(false);
    const [reset, setResetValue] = useState('');

    let nameBox = document.getElementById('nameBox')
    let phoneBox = document.getElementById('phoneBox')
    let emailBox = document.getElementById('emailBox')

    let parentNode = document.getElementById('parent');


    function handleName() {
        setName(nameBox.value)
    };

    function handlePhone() {
        setPhone(phoneBox.value)
    }

    function handleEmail() {
        setEmail(emailBox.value)
    }

    function handleSubmit() {
        
    }

    function handleReset() {
        setName('')
        setPhone('')
        setEmail('')
    }

    return (
        <div className="Personal" id='parent'>
            <div className="Name">
                <h2>Name:</h2>
                <input type="text" id='nameBox' value={name} onChange={handleName}/>
            </div>
            <div className="Phone">
                <h2>Phone Number:</h2>
                <input type="text" id='phoneBox' value={phone} onChange={handlePhone}/>
            </div>
            <div className="Email">
                <h2>Email</h2>
                <input type="text" id='emailBox' value={email}  onChange={handleEmail}/>
            </div>
            <button onClick={() => handleSubmit}>Submit</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Name
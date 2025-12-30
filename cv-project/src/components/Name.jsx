function Name() {
    const [name, email, phone] = useState('');
    const [submitted, SetIsSubmitted] = useState(false);

    return (
        <div className="Personal">
            <div className="Name">
                <h2>Name:</h2>
                <input type="text" value={name} />
            </div>
            <div className="Phone">
                <h2>Phone Number:</h2>
                <input type="text" value={phone} />
            </div>
            <div className="Email">
                <h2>Name</h2>
                <input type="text" value={email} />
            </div>
            <button onClick={() => SetIsSubmitted(true)}>Submit</button>
        </div>
    )
}

export default Name
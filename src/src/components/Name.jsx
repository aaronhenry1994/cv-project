function Name({name, email, number}) {
    const [name, email, number] = useState('');

   return (
    <div>
        <input type="text" value={name}/>
        <input type="text"  value={email}/>
        <input type="text" value={number}/>
    </div>
   )
}

export default Name
function Personal() {
const [name, email, phone] = useState('');

return (
  <div>
    <input type="text" value={name} />
    <input type="text" value={email} />
    <input type="text" value={phone} />
  </div>
)
};

export default Personal
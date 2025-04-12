
import { useState } from 'react';

export default function Upload() {
  const [file, setFile] = useState(null);
  const [hw, setHw] = useState('');
  const [sw, setSw] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Файлът е подготвен за качване (демо функционалност).');
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h2>Качи файл</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".bin,.mod,.ori" onChange={(e) => setFile(e.target.files[0])} required /><br /><br />
        <input type="text" placeholder="HW номер" value={hw} onChange={(e) => setHw(e.target.value)} required /><br /><br />
        <input type="text" placeholder="SW номер" value={sw} onChange={(e) => setSw(e.target.value)} required /><br /><br />
        <textarea placeholder="Описание" value={description} onChange={(e) => setDescription(e.target.value)} /><br /><br />
        <button type="submit">Качи</button>
      </form>
    </div>
  );
}

import React, { useState } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    name: '',
    type: 'customer',
    trade: '',
    location: '',
    contact: '',
  });
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, form]);
    setForm({ name: '', type: 'customer', trade: '', location: '', contact: '' });
  };

  const tradespeople = users.filter(user =>
    user.type === 'tradesperson' &&
    (user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     user.trade.toLowerCase().includes(searchTerm.toLowerCase()) ||
     user.location.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">TriniTrades App TT</h1>

      <form onSubmit={handleSubmit} className="space-y-2 mb-6">
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="border p-2 w-full"
        >
          <option value="tradesperson">Tradesperson</option>
        </select>
        {form.type === 'tradesperson' && (
          <>
            <input
              name="trade"
              placeholder="Trade (e.g. Electrician)"
              value={form.trade}
              onChange={handleChange}
              className="border p-2 w-full"
            />
            <input
              name="location"
              placeholder="Location"
              value={form.location}
              onChange={handleChange}
              className="border p-2 w-full"
            />
            <input
              name="contact"
              placeholder="Contact Number"
              value={form.contact}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </>
        )}
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Register
        </button>
      </form>

      <div className="bg-white p-4 rounded shadow-md">
        <input
          type="text"
          placeholder="Search by name, trade or location"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 mb-4 w-full"
        />

        <h2 className="text-xl font-semibold mt-4 mb-2">Available Tradespeople</h2>
        <ul className="space-y-2">
          {tradespeople.map((user, idx) => (
            <li key={idx} className="p-2 border rounded">
              <strong>{user.name}</strong> - {user.trade} ({user.location})<br />
              📞 {user.contact}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;

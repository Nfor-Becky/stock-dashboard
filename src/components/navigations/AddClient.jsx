import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddClient = ({ onAddClient }) => {
  const [clientName, setClientName] = useState('');
  const [clientType, setClientType] = useState('');
  const [clientStatus, setClientStatus] = useState('Active');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddClient({ name: clientName, type: clientType, status: clientStatus }); // Call the function to add client
    navigate('/'); // Redirect to the clients page
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Add Client</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          placeholder="Client Name"
          className="border p-2 mr-2"
          required
        />
        <input
          type="text"
          value={clientType}
          onChange={(e) => setClientType(e.target.value)}
          placeholder="Type of Customer"
          className="border p-2 mr-2"
          required
        />
        <select
          value={clientStatus}
          onChange={(e) => setClientStatus(e.target.value)}
          className="border p-2 mr-2"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="Pending">Pending</option>
        </select>
        <button type="submit" className="bg-blue-600 text-white p-2">
          Add Client
        </button>
      </form>
    </div>
  );
};

export default AddClient;
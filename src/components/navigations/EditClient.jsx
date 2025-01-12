import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateClient } from '../../store/clientsSlice'; 

const EditClient = () => {
  const dispatch = useDispatch();  
  const navigate = useNavigate();
  const { id } = useParams();
  const clients = useSelector((state) => state.clients);
  
  const clientToEdit = clients.find(client => client.id === parseInt(id));
  
  const [clientName, setClientName] = useState('');
  const [clientType, setClientType] = useState('');
  const [clientStatus, setClientStatus] = useState('Active');

  useEffect(() => {
    if (clientToEdit) {
      setClientName(clientToEdit.name);
      setClientType(clientToEdit.type);
      setClientStatus(clientToEdit.status);
    }
  }, [clientToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateClient({ id: clientToEdit.id, name: clientName, type: clientType, status: clientStatus }));
    navigate('/'); // Redirect to the clients page after updating
  };

  if (!clientToEdit) {
    return <div>Client not found!</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Edit Client</h1>
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
          Update Client
        </button>
      </form>
    </div>
  );
};

export default EditClient;
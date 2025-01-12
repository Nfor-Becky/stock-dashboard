import React, { useState } from "react";
import { useSelector } from "react-redux"; 
import { Link } from "react-router-dom";

const Clients = () => {
  const [searchTerm, setSearchTerm] = useState('');


  const clients = useSelector((state) => state.clients) || [];

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between">
      <div className="">
      <h1 className="text-2xl font-bold">Gestion des Clients</h1>
      <p className="text-sm">Gérez vos clients et prospects</p>
      </div>
      <div className="">
      <Link to="/add-client" className="bg-blue-600 text-white p-2 mb-4 inline-block">
        Add Client 
      </Link>
      </div>
      </div>
      <table className="mt-4 border-collapse border border-gray-200 w-full rounded-xl">
        <thead>
        <td colSpan="5" className="border border-gray-300">
              <div className="flex items-center justify-between">
                <input
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search Clients"
                  className="border p-2 rounded-xl w-full"
                />
                <button className="bg-blue-600 text-white p-2 rounded-full ml-2">
                  Filter
                </button>
              </div>
            </td>

          <tr>
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Type of Customer</th>
            <th className="border border-gray-300 p-2">Status</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
          <tr>
            
          </tr>
        </thead>
        <tbody>
          {filteredClients.length > 0 ? (
            filteredClients.map((client) => (
              <tr key={client.id}>
                <td className="border border-gray-300 p-2">{client.id}</td>
                <td className="border border-gray-300 p-2">{client.name}</td>
                <td className="border border-gray-300 p-2">{client.type}</td>
                <td className="border border-gray-300 p-2">{client.status}</td>
                <td className="border border-gray-300 p-2">
                  <Link to={`/edit-client/${client.id}`} className="text-blue-600">Edit</Link>
                  <button className="text-red-600 ml-2">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="border border-gray-300 p-2 text-center">No clients found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Clients;
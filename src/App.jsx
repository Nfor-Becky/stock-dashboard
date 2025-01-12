import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Sidebar from './components/Sidebar';
import Clients from './components/navigations/Clients';
import Bills from './components/navigations/Bills';
import Products from './components/navigations/Products';
import Stock from './components/navigations/Stock';
import Logs from './components/navigations/Logs';
import Users from './components/navigations/Users';
import Settings from './components/navigations/settings';
import AddClient from './components/navigations/AddClient';
import EditClient from './components/navigations/EditClient'; 
import { useDispatch } from 'react-redux';
import { addClient } from './store/clientsSlice'; // Corrected path

const App = () => {
  const dispatch = useDispatch();

  const handleAddClient = (newClient) => {
    dispatch(addClient(newClient)); // Dispatch the action
  };

  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <div className="w-1/5 bg-gray-200 p-3">
          <Sidebar />
        </div>
        <div className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Clients />} />
            <Route path="/products" element={<Products />} />
            <Route path="/bills" element={<Bills />} />
            <Route path="/stock" element={<Stock />} />
            <Route path="/logs" element={<Logs />} />
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/add-client" element={<AddClient onAddClient={handleAddClient} />} />
            <Route path="/edit-client/:id" element={<EditClient />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
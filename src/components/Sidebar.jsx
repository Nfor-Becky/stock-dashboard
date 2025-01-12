import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
      <h1 className='text-green-600 font-bold text-2xl'>BLOOSAT BSS</h1>
      <div className="px-5 py-3">
        <p className='py-1 px-2 font-medium text-gray-800'>Tableau de bord</p>
        <nav>
          <ul>
            <li className='py-1 px-2 font-medium text-gray-800 my-1 hover:bg-green-600 hover:rounded'>
              <Link to='/'>Clients</Link>
            </li>
            <li className='py-1 px-2 font-medium text-gray-800 my-1 hover:bg-green-600 hover:rounded'>
              <Link to='/products'>Produits</Link>
            </li>
            <li className='py-1 px-2 font-medium text-gray-800 my-1 hover:bg-green-600 hover:rounded'>
              <Link to='/bills'>Factures</Link>
            </li>
            <li className='py-1 px-2 font-medium text-gray-800 my-1 hover:bg-green-600 hover:rounded'>
              <Link to='/stock'>Stock</Link>
            </li>
            <li className='py-1 px-2 font-medium text-gray-800 my-1 hover:bg-green-600 hover:rounded'>
              <Link to='/logs'>Logs</Link>
            </li>
            <li className='py-1 px-2 font-medium text-gray-800 my-1 hover:bg-green-600 hover:rounded'>
              <Link to='/users'>Utilisateurs</Link>
            </li>
            <li className='py-1 px-2 font-medium text-gray-800 my-1 hover:bg-green-600 hover:rounded'>
              <Link to='/settings'>Paramètres</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
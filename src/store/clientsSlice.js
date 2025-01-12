// src/store/clientsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const defaultClients = [
  { id: 1, name: "John Doe", type: "Regular", status: "Active" },
  { id: 2, name: "Jane Smith", type: "Premium", status: "Inactive" },
  { id: 3, name: "Alice Johnson", type: "Regular", status: "Active" },
];

const clientsSlice = createSlice({
  name: 'clients',
  initialState: defaultClients,
  reducers: {
    addClient: (state, action) => {
      state.push(action.payload);
    },
    updateClient: (state, action) => {
      const { id, updatedData } = action.payload;
      const index = state.findIndex(client => client.id === id);
      if (index !== -1) {
        state[index] = { ...state[index], ...updatedData };
      }
    },
    // Other reducers...
  },
});

export const { addClient, updateClient } = clientsSlice.actions;
export default clientsSlice.reducer;
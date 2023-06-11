// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import {firebase, databaseRef}  from '../firebase';

function CRUD() {
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [editedItem, setEditedItem] = useState('');

  // Mendapatkan data dari Firebase Realtime Database
  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await databaseRef.once('value');
        const items = snapshot.val();
        if (items) {
          const data = Object.entries(items).map(([key, value]) => ({ id: key, name: value }));
          setData(data);
        }
      } catch (error) {
        console.error('Gagal mengambil data:', error);
      }
    };
    fetchData();
  }, []);

  // Menambahkan item baru ke Firebase Realtime Database
  const addItem = async () => {
    try {
      await database.ref('/items').push(newItem);
      setNewItem('');
    } catch (error) {
      console.error('Gagal menambahkan item:', error);
    }
  };

  // Mengupdate item di Firebase Realtime Database
  const updateItem = async (id) => {
    try {
      await database.ref(`/items/${id}`).set(editedItem);
      setEditedItem('');
    } catch (error) {
      console.error('Gagal mengupdate item:', error);
    }
  };

  // Menghapus item dari Firebase Realtime Database
  const deleteItem = async (id) => {
    try {
      await database.ref(`/items/${id}`).remove();
    } catch (error) {
      console.error('Gagal menghapus item:', error);
    }
  };

  return (
    <div>
      <h2>CRUD</h2>
      <input
        type="text"
        placeholder="New item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addItem}>Add</button>

      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <input
              type="text"
              value={editedItem === item.id ? editedItem : item.name}
              onChange={(e) => setEditedItem(e.target.value)}
              readOnly={editedItem !== item.id}
            />
            {editedItem !== item.id && (
              <>
                <button onClick={() => setEditedItem(item.id)}>Edit</button>
                <button onClick={() => deleteItem(item.id)}>Delete</button>
              </>
            )}
            {editedItem === item.id && (
              <button onClick={() => updateItem(item.id)}>Save</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default CRUD;

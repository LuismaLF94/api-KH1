import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Items() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({
    name: '',
    origin: '',
    description: ''
  });
  const [editItemId, setEditItemId] = useState(null); // State to store the ID of the item being edited

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('/items');
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editItemId) {
        // Update item if editItemId exists
        await axios.put(`/items/${editItemId}`, newItem);
      } else {
        // Create new item if editItemId does not exist
        await axios.post('/items', newItem);
      }
      fetchItems(); // Refresh the list
      setNewItem({ name: '', origin: '', description: '' }); // Clear form after submission
      setEditItemId(null); // Reset editItemId after submission
    } catch (error) {
      console.error('Error creating/updating item', error);
    }
  };

  const handleEdit = (item) => {
    // Set newItem state to the item being edited
    setNewItem({
      name: item.name,
      origin: item.type,
      description: item.description
    });
    setEditItemId(item._id); // Set editItemId to the ID of the item being edited
  };

  const handleCancelEdit = () => {
    setNewItem({ name: '', type: '', effect: '', description: '' }); // Clear newItem state
    setEditItemId(null); // Reset editItemId
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/items/${id}`);
      fetchItems(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting item', error);
    }
  };

  return (
    <div>
      <h1>Items</h1>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
      <form onSubmit={handleSubmit}>
        <input name="name" value={newItem.name} onChange={handleChange} placeholder="Name" />
        <input name="origin" value={newItem.origin} onChange={handleChange} placeholder="origin" />
        <input name="description" value={newItem.description} onChange={handleChange} placeholder="Description" />
        {editItemId ? (
          <div>
            <button type="submit">Update Item</button>
            <button type="button" onClick={handleCancelEdit}>Cancel</button>
          </div>
        ) : (
          <button type="submit">Create Item</button>
        )}
      </form>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            <strong>Name:</strong> {item.name}<br />
            <strong>Origin:</strong> {item.origin}<br />
            <strong>Description:</strong> {item.description}<br />
            <button onClick={() => handleEdit(item)}>Edit</button>
            <button onClick={() => handleDelete(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Items;

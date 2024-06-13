import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Heartless() {
  const [heartless, setHeartless] = useState([]);
  const [newHeartless, setNewHeartless] = useState({
    name: '',
    hp: '',
    description: ''
  });
  const [editHeartlessId, setEditHeartlessId] = useState(null); // State to store the ID of the heartless being edited

  useEffect(() => {
    fetchHeartless();
  }, []);

  const fetchHeartless = async () => {
    try {
      const response = await axios.get('/heartless');
      setHeartless(response.data);
    } catch (error) {
      console.error('Error fetching heartless', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewHeartless(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editHeartlessId) {
        // Update heartless if editHeartlessId exists
        await axios.put(`/heartless/${editHeartlessId}`, newHeartless);
      } else {
        // Create new heartless if editHeartlessId does not exist
        await axios.post('/heartless', newHeartless);
      }
      fetchHeartless(); // Refresh the list
      setNewHeartless({ name: '', hp: '', description: '' }); // Clear form after submission
      setEditHeartlessId(null); // Reset editHeartlessId after submission
    } catch (error) {
      console.error('Error creating/updating heartless', error);
    }
  };

  const handleEdit = (heart) => {
    // Set newHeartless state to the heartless being edited
    setNewHeartless({
      name: heart.name,
      hp: heart.hp,
      description: heart.description
    });
    setEditHeartlessId(heart._id); // Set editHeartlessId to the ID of the heartless being edited
  };

  const handleCancelEdit = () => {
    setNewHeartless({ name: '', type: '', hp: '', origin: '', description: '' }); // Clear newHeartless state
    setEditHeartlessId(null); // Reset editHeartlessId
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/heartless/${id}`);
      fetchHeartless(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting heartless', error);
    }
  };

  return (
    <div>
      <h1>Heartless</h1>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
      <form onSubmit={handleSubmit}>
        <input name="name" value={newHeartless.name} onChange={handleChange} placeholder="Name" />
        <input name="hp" value={newHeartless.hp} onChange={handleChange} placeholder="HP" />
        <input name="description" value={newHeartless.description} onChange={handleChange} placeholder="Description" />
        {editHeartlessId ? (
          <div>
            <button type="submit">Update Heartless</button>
            <button type="button" onClick={handleCancelEdit}>Cancel</button>
          </div>
        ) : (
          <button type="submit">Create Heartless</button>
        )}
      </form>
      <ul>
        {heartless.map((heart) => (
          <li key={heart._id}>
            <strong>Name:</strong> {heart.name}<br />
            <strong>HP:</strong> {heart.hp}<br />
            <strong>Description:</strong> {heart.description}<br />
            <button onClick={() => handleEdit(heart)}>Edit</button>
            <button onClick={() => handleDelete(heart._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Heartless;

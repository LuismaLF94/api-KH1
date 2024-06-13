import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Worlds() {
  const [worlds, setWorlds] = useState([]);
  const [newWorld, setNewWorld] = useState({
    name: '',
    origin: '',
    description: ''
  });
  const [editWorldId, setEditWorldId] = useState(null);

  useEffect(() => {
    fetchWorlds();
  }, []);

  const fetchWorlds = async () => {
    try {
      const response = await axios.get('/worlds');
      setWorlds(response.data);
    } catch (error) {
      console.error('Error fetching worlds', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewWorld(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editWorldId) {
        await axios.put(`/worlds/${editWorldId}`, newWorld);
      } else {
        await axios.post('/worlds', newWorld);
      }
      fetchWorlds();
      setNewWorld({ name: '', origin: '', description: '' });
      setEditWorldId(null);
    } catch (error) {
      console.error('Error creating/updating world', error);
    }
  };

  const handleEdit = (world) => {
    setNewWorld({
      name: world.name,
      origin: world.origin,
      description: world.description
    });
    setEditWorldId(world._id);
  };

  const handleCancelEdit = () => {
    setNewWorld({ name: '', origin: '', description: '' });
    setEditWorldId(null);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/worlds/${id}`);
      fetchWorlds();
    } catch (error) {
      console.error('Error deleting world', error);
    }
  };

  return (
    <div>
      <h1>Worlds</h1>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
      <form onSubmit={handleSubmit}>
        <input name="name" value={newWorld.name} onChange={handleChange} placeholder="Name" />
        <input name="origin" value={newWorld.origin} onChange={handleChange} placeholder="Location" />
        <input name="description" value={newWorld.description} onChange={handleChange} placeholder="Description" />
        {editWorldId ? (
          <div>
            <button type="submit">Update World</button>
            <button type="button" onClick={handleCancelEdit}>Cancel</button>
          </div>
        ) : (
          <button type="submit">Create World</button>
        )}
      </form>
      <ul>
        {worlds.map((world) => (
          <li key={world._id}>
            <strong>Name:</strong> {world.name}<br />
            <strong>Location:</strong> {world.origin}<br />
            <strong>Description:</strong> {world.description}<br />
            <button onClick={() => handleEdit(world)}>Edit</button>
            <button onClick={() => handleDelete(world._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Worlds;

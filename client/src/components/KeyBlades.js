import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function KeyBlades() {
  const [keyBlades, setKeyBlades] = useState([]);
  const [newKeyBlade, setNewKeyBlade] = useState({
    name: '',
    damage: '',
    pm: '',
    criticalHit: '',
    bonusCritical: '',
    description:''
  });
  const [editKeyBladeId, setEditKeyBladeId] = useState(null);

  useEffect(() => {
    fetchKeyBlades();
  }, []);

  const fetchKeyBlades = async () => {
    try {
      const response = await axios.get('/keyblades');
      setKeyBlades(response.data);
    } catch (error) {
      console.error('Error fetching keyBlades', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewKeyBlade(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editKeyBladeId) {
        await axios.put(`/keyblades/${editKeyBladeId}`, newKeyBlade);
      } else {
        await axios.post('/keyblades', newKeyBlade);
      }
      fetchKeyBlades();
      setNewKeyBlade({ name: '', damage: '', pm: '', criticalHit: '', bonusCritical: '' , description: '' });
      setEditKeyBladeId(null);
    } catch (error) {
      console.error('Error creating/updating keyBlade', error);
    }
  };

  const handleEdit = (keyBlade) => {
    setNewKeyBlade({
      name: keyBlade.name,
      damage: keyBlade.damage,
      pm: keyBlade.pm,
      criticalHit: keyBlade.criticalHit,
      bonusCritical: keyBlade.bonusCritical,
      description: keyBlade.description

    });
    setEditKeyBladeId(keyBlade._id);
  };

  const handleCancelEdit = () => {
    setNewKeyBlade({ name: '', damage: '', pm: '', criticalHit: '', bonusCritical: '' , description: '' });
    setEditKeyBladeId(null);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/keyblades/${id}`);
      fetchKeyBlades();
    } catch (error) {
      console.error('Error deleting keyBlade', error);
    }
  };

  return (
    <div>
      <h1>KeyBlades</h1>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
      <form onSubmit={handleSubmit}>
        <input name="name" value={newKeyBlade.name} onChange={handleChange} placeholder="Name" />
        <input name="damage" value={newKeyBlade.damage} onChange={handleChange} placeholder="Damage" />
        <input name="pm" value={newKeyBlade.pm} onChange={handleChange} placeholder="PM" />
        <input name="criticalHit" value={newKeyBlade.criticalHit} onChange={handleChange} placeholder="Critical Hit" />
        <input name="bonusCritical" value={newKeyBlade.bonusCritical} onChange={handleChange} placeholder="Bonus Critical" />
        <input name="description" value={newKeyBlade.description} onChange={handleChange} placeholder="Description" />
        {editKeyBladeId ? (
          <div>
            <button type="submit">Update KeyBlade</button>
            <button type="button" onClick={handleCancelEdit}>Cancel</button>
          </div>
        ) : (
          <button type="submit">Create KeyBlade</button>
        )}
      </form>
      <ul>
        {keyBlades.map((keyBlade) => (
          <li key={keyBlade._id}>
            <strong>Name:</strong> {keyBlade.name}<br />
            <strong>Damage:</strong> {keyBlade.damage}<br />
            <strong>PM:</strong> {keyBlade.pm}<br />
            <strong>Cricical Hit:</strong> {keyBlade.criticalHit}<br />
            <strong>Bonus Critical:</strong> {keyBlade.bonusCritical}<br />
            <strong>Description:</strong> {keyBlade.description}<br />
            <button onClick={() => handleEdit(keyBlade)}>Edit</button>
            <button onClick={() => handleDelete(keyBlade._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default KeyBlades;

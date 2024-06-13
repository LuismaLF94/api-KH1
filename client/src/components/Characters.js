import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [newCharacter, setNewCharacter] = useState({
    name: '',
    level: '',
    hp: '',
    origin: '',
    description: ''
  });
  const [editCharacterId, setEditCharacterId] = useState(null); // State to store the ID of the character being edited

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    try {
      const response = await axios.get('/characters');
      setCharacters(response.data);
    } catch (error) {
      console.error('Error fetching characters', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCharacter(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editCharacterId) {
        // Update character if editCharacterId exists
        await axios.put(`/characters/${editCharacterId}`, newCharacter);
      } else {
        // Create new character if editCharacterId does not exist
        await axios.post('/characters', newCharacter);
      }
      fetchCharacters(); // Refresh the list
      setNewCharacter({ name: '', level: '', hp: '', origin: '', description: '' }); // Clear form after submission
      setEditCharacterId(null); // Reset editCharacterId after submission
    } catch (error) {
      console.error('Error creating/updating character', error);
    }
  };

  const handleEdit = (character) => {
    // Set newCharacter state to the character being edited
    setNewCharacter({
      name: character.name,
      level: character.level,
      hp: character.hp,
      origin: character.origin,
      description: character.description
    });
    setEditCharacterId(character._id); // Set editCharacterId to the ID of the character being edited
  };

  const handleCancelEdit = () => {
    setNewCharacter({ name: '', level: '', hp: '', origin: '', description: '' }); // Clear newCharacter state
    setEditCharacterId(null); // Reset editCharacterId
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/characters/${id}`);
      fetchCharacters(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting character', error);
    }
  };

  return (
    <div>
      <h1>Characters</h1>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
      <form onSubmit={handleSubmit}>
        <input name="name" value={newCharacter.name} onChange={handleChange} placeholder="Name" />
        <input name="level" value={newCharacter.level} onChange={handleChange} placeholder="Level" />
        <input name="hp" value={newCharacter.hp} onChange={handleChange} placeholder="HP" />
        <input name="origin" value={newCharacter.origin} onChange={handleChange} placeholder="Origin" />
        <input name="description" value={newCharacter.description} onChange={handleChange} placeholder="Description" />
        {editCharacterId ? (
          <div>
            <button type="submit">Update Character</button>
            <button type="button" onClick={handleCancelEdit}>Cancel</button>
          </div>
        ) : (
          <button type="submit">Create Character</button>
        )}
      </form>
      <ul>
        {characters.map((character) => (
          <li key={character._id}>
            <strong>Name:</strong> {character.name}<br />
            <strong>Level:</strong> {character.level}<br />
            <strong>HP:</strong> {character.hp}<br />
            <strong>Origin:</strong> {character.origin}<br />
            <strong>Description:</strong> {character.description}<br />
            <button onClick={() => handleEdit(character)}>Edit</button>
            <button onClick={() => handleDelete(character._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Characters;

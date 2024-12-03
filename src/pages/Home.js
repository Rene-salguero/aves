// src/pages/Home.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [name, setName] = useState('Fredy Rene Salguero');
  const [id, setId] = useState('23000389');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/birds', { state: { name, id } });
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Inicio</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nombre completo:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Número de carnet:
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Cargar</button>
      </form>
    </div>
  );
};

export default Home;

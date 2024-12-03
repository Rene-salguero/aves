// src/pages/BirdList.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const BirdList = () => {
  const { state } = useLocation();
  const [birds, setBirds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBirds = async () => {
      try {
        const response = await axios.get('https://xeno-canto.org/api/2/recordings?query=cnt:guatemala');
        setBirds(response.data.recordings);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching bird data:', error);
        setLoading(false);
      }
    };

    fetchBirds();
  }, []);

  if (loading) {
    return <p style={{ textAlign: 'center' }}>Cargando datos...</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Aves de Guatemala</h2>
      <p>
        Bienvenido, {state.name} (Carnet: {state.id})
      </p>
      {birds.map((bird) => (
        <div key={bird.id} className="bird-card">
          <h3>{bird.en}</h3>
          <p><strong>Familia:</strong> {bird.gen}</p>
          <p><strong>Ubicación:</strong> {bird.loc}</p>
          <p><strong>Descubridor:</strong> {bird.rec}</p>
          <audio controls>
            <source src={bird.file} type="audio/mpeg" />
            Tu navegador no soporta el elemento de audio.
          </audio>
        </div>
      ))}
    </div>
  );
};

export default BirdList;

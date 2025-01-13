import React, { useState } from 'react';
import imagen2 from '../assets/HaloODST.jpg'; // Importa la imagen

function Seccion2() {
  console.log('Seccion2 is rendering');
  const [textareaValue, setTextareaValue] = useState(''); // Estado para el área de texto

  const handleTextareaChange = (e) => {
    setTextareaValue(e.target.value);
  };

  return (
    <section className="App-seccion p-4 flex flex-col items-center">
      <div className="bg-white p-6 rounded shadow-lg text-center">
        <h2 className="text-purple-800 text-2xl mb-4">Halo 3 ODST</h2>
        <p className="text-purple-800 mb-4">El jugador asume el papel de un Soldado de Choque de Descenso Orbital, (comúnmente abreviado como SCDO), y también conocidos como 
            Helljumpers, o (por sus siglas en inglés que significan Orbital Drop Shock Trooper), o simplemente abreviado como (ODST en inglés). Hay dos modos de juego: 
            en el modo Campaña, los jugadores pueden explorar la ciudad en ruinas de Nueva Mombasa para descubrir lo que ocurrió con sus compañeros 
            desaparecidos en medio de una invasión extraterrestre. En la opción multijugador Tiroteo los jugadores luchan contra olas de enemigos 
            cada vez más difíciles para ganar puntos y sobrevivir el mayor tiempo posible. Nuevas copias del juego también contenían claves de acceso a 
            la beta multijugador de Halo: Reach, que se activó el 3 de mayo de 2010.</p>
        <img src={imagen2} alt="Imagen en Sección 2" className="mt-4 rounded shadow-lg" />
        <div className="mt-4">
          <textarea value={textareaValue} onChange={handleTextareaChange} className="w-full p-2 rounded border"></textarea>
        </div>
      </div>
    </section>
  );
}

export default Seccion2;

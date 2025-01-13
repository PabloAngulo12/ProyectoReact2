import React, { useState } from 'react';
import imagen3 from '../assets/haloreach.jpg'; // Importa la imagen

function Seccion3() {
  console.log('Seccion3 is rendering');
  const [textareaValue, setTextareaValue] = useState(''); // Estado para el área de texto

  const handleTextareaChange = (e) => {
    setTextareaValue(e.target.value);
  };

  return (
    <section className="App-seccion p-4 flex flex-col items-center">
      <div className="bg-white p-6 rounded shadow-lg text-center">
        <h2 className="text-purple-800 text-2xl mb-4">Halo reach</h2>
        <p className="text-purple-800 mb-4">El juego transcurre en el año 2552, donde la humanidad mantiene una guerra con el Covenant. El jugador controla a un nuevo personaje 
            llamado Noble 6, un super soldado miembro del Equipo «Noble» durante la batalla en la colonia humana de Reach. Un detalle interesante del juego es que puedes 
            personalizar a tu SPARTAN, permaneciendo así en todos los modos de juego, tanto en multijugador como en campaña. Existen a disposición del jugador muchas cosas 
            para personalizar al personaje jugador, como cascos, armaduras, etc, que se desbloquearán ganando dinero o puntos pasando misiones de la campaña, 
            al jugar partidas multijugador, etc. En su primer día, Halo: Reach recaudó 200 millones de dólares.</p>
        <img src={imagen3} alt="Imagen en Sección 3" className="mt-4 rounded shadow-lg" />
        <div className="mt-4">
          <textarea value={textareaValue} onChange={handleTextareaChange} className="w-full p-2 rounded border"></textarea>
        </div>
      </div>
    </section>
  );
}

export default Seccion3;

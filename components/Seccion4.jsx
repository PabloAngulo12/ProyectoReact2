import React, { useState } from 'react';
import imagen4 from '../assets/halo-wars1.jpg'; 
import imagen5 from '../assets/halo-wars2.jpg'; 

function Seccion4() {
  console.log('Seccion4 is rendering');

  return (
    <section className="App-seccion p-4 flex flex-col items-center">
      <div className="bg-white p-6 rounded shadow-lg text-center">
        <h2 className="text-purple-800 text-2xl mb-4">Halo Wars 1 y 2</h2>
        <p className="text-purple-800 mb-4">Halo Wars es un juego de estrategia en tiempo real desarrollado por Ensemble Studios. 
            Su primer lanzamiento fue exclusivo para la consola Xbox 360. 
            Se anunció durante la X06 de Microsoft Game Studios el 27 de septiembre de 2006 y 
            se lanzó por primera vez a la venta el 3 de marzo del 2009. Fue el primer juego de la saga oficial en no ser desarrollado por Bungie, 
            y el primero en no tratarse del género shooter. Despues Salio Halo Wars 2 el cual es un videojuego de estrategia en tiempo real, 
            secuela de Halo Wars, desarrollado por Creative Assembly y supervisado por 343 Industries. 
            Lanzado el 21 de Febrero de 2017 en Xbox One y Windows 10. 
            El juego fue presentado con un breve teaser tráiler cinemático en la Gamescom 2015 y un nuevo tráiler cinemático en el E3 2016.</p>
        <img src={imagen4} alt="Imagen en Sección 4" className="mt-4 rounded shadow-lg" />
        <img src={imagen5} alt="Imagen en Sección 4" className="mt-4 rounded shadow-lg" />
      </div>
    </section>
  );
}

export default Seccion4;

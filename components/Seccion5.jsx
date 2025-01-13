import React from 'react';

function Seccion5() {
  console.log('Seccion5 is rendering');

  const juegos = [
    { nombre: 'Halo combat evolved', año: 2001 },
    { nombre: 'Halo 2', año: 2004 },
    { nombre: 'Halo 3', año: 2007 },
    { nombre: 'Halo Wars', año: 2009 },
    { nombre: 'Halo 3 odst', año: 2009 },
    { nombre: 'Halo Reach', año: 2010 },
    { nombre: 'Halo 4', año: 2012 },
    { nombre: 'Halo 5', año: 2015 },
    { nombre: 'Halo Wars 2', año: 2017 },
    { nombre: 'Halo infinite', año: 2021 }
  ];

  return (
    <section className="App-seccion p-4 flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded shadow-lg text-center">
        <h2 className="text-purple-800 text-2xl mb-4">Años de salida</h2>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Nombre del Juego</th>
              <th className="px-4 py-2">Año de Salida</th>
            </tr>
          </thead>
          <tbody>
            {juegos.map((juego, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{juego.nombre}</td>
                <td className="border px-4 py-2">{juego.año}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Seccion5;

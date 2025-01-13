import React, { useState } from 'react';

function Seccion1() {
  console.log('Seccion1 is rendering');
  const [inputValue, setInputValue] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: inputValue,
          body: 'This is a test post',
          userId: 1,
        }),
      });
      const data = await response.json();
      setResponseMessage(`Submitted successfully! Post ID: ${data.id}`);
      console.log('Input value:', inputValue);
    } catch (error) {
      setResponseMessage('Submission failed. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <section className="App-seccion p-4 flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-purple-800 text-2xl mb-4">Formulario</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <label className="block text-purple-800 mb-2">
            Nombre:
            <input type="text" value={inputValue} onChange={handleChange} className="block mt-1 p-2 rounded border" />
          </label>
          <button type="submit" className="mt-4 p-2 bg-purple-800 text-white rounded">Enviar</button>
        </form>
        {responseMessage && <p className="mt-4 text-purple-800">{responseMessage}</p>}
      </div>
    </section>
  );
}

export default Seccion1;


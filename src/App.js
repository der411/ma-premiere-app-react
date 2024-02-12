import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('http://localhost:3001/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nom: 'Jean', age: 30 }),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
      console.error('Error:', error);
    });
  }, []);

  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  );
}

export default App;
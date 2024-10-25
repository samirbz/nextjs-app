"use client"
import { useState, ChangeEvent } from 'react';

const Home = () => {
  // Define the state with an explicit type
  const [name, setName] = useState<string>('');

  // Event handler with type annotation
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h1>Welcome to Next.js with TypeScript!</h1>
      <p>Enter your name:</p>
      <input type="text" value={name} onChange={handleChange} placeholder="Enter your name" />
      {name && <p>Hello, {name}!</p>}
    </div>
  );
};

export default Home;
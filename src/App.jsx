import './App.css'
import { useEffect, useState } from 'react';
import { createClient } from "pexels";
const key = 'xbetsmIHkKyH66M6d3D2QdkXkewdCIjr96pDsSaRxKvhiO317k53RgfV';


function App() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const client = createClient(key);
  }, []);

  return (
    <>
      <h1>OK</h1>
    </>
  )
}

export default App

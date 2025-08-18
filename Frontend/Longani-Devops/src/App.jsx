import React, {useEffect, useState} from 'react';

export default function App(){
  const [msg, setMsg] = useState('Loading...');
  useEffect(() => {
    fetch('/api/hello')
      .then(r => r.json())
      .then(d => setMsg(d.message))
      .catch(()=> setMsg('API not available'));
  }, []);
  return (
    <div style={{fontFamily:'sans-serif', padding:20}}>
      <h1>Longani (Phase 1)</h1>
      <p>Backend message: <strong>{msg}</strong></p>
    </div>
  );
}

import { useState } from 'react';

export default function DarkMode () {

  const [mode, setMode ] = useState('light');

  return (
    <div className={`page ${mode === 'dark' ? 'dark-mode' : ''}`}>
      <button onClick={() => setMode('dark')} className='dark-mode-button'>Dark Mode</button>
      <button onClick={() => setMode('light')} className='light-mode-button'>Light Mode</button>
    </div>
  )
}

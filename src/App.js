import React, { createContext, useState, useMemo } from 'react';
import './App.css';
import PixelArt from './08-pixel-art/PixelArt';

export const ColorContext = React.createContext({
  clickedColor: '',
  setClickedColor: () => {}
});


function App () {

  const [clickedColor, setClickedColor] = useState('#000');
   const value = useMemo(() => ({
    clickedColor, setClickedColor
  }), [clickedColor]);

  return (
    
    <ColorContext.Provider value={value} >
      <div className='App'>
        <PixelArt />
      </div>
    </ColorContext.Provider >
  )
}

export default App;

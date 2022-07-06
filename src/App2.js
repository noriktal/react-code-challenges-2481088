import React, { createContext,  useReducer } from 'react';
import './App.css';
import PixelArt2 from './08-pixel-art/PixelArt2';
import { colorReducer, initialState, changeColorAction } from './08-pixel-art/colorReducer';

export const ColorContext2 = createContext();


function App2 () {

const [clickedColor, dispatch] = useReducer(colorReducer, initialState);

const value = {
    clickedColor : clickedColor,
    setClickedColor: (color) => dispatch(changeColorAction(color))
};

  return (
    
    <ColorContext2.Provider value={value} >
      <div className='App'>
        <PixelArt2 />
      </div>
    </ColorContext2.Provider >
  )
}

export default App2;

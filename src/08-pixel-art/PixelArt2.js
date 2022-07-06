import React, { useContext, useState } from 'react';
import { ColorContext2 } from '../App2';
import { colorReducer, initialState, changeColor } from './colorReducer';



function ColorPicker2 () {
 
  const { setClickedColor } = useContext(ColorContext2);

  const colors = ['red', 'blue', 'yellow', 'green', 'black', 'white', 'purple']
  
  const handleClick = (color) => {
    setClickedColor(color)
  };
  
  return (
    <div>
      <h1>Choose a color</h1>
      {colors.map(color => <button key={color} onClick={() => handleClick(color)} style={{ backgroundColor: color }} />)}
    </div>
  )
}

function Pixel2 () {

  const [myColor, setMyColor] = useState('#fff');
  const { clickedColor } = useContext(ColorContext2);
  return <div 
          style={{ height: '20px', width: '20px', backgroundColor: myColor, margin: '1px', border: '1px solid grey' }}
          onClick={() => setMyColor(clickedColor)}
          />
        }

function Pixels2 () {
  const pixels = []
  for (let i = 0; i < 100; i++) pixels.push(<Pixel2 key={i} />)
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', width: '210px', margin: '0 auto' }}>
      {pixels}
    </div>
  )
}

export default function PixelArt2 () {
  return (
    <div>
      <ColorPicker2 />
      <Pixels2 />
    </div>
  )
}

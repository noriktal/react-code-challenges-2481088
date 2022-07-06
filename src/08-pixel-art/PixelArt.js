import React, { useContext, useState } from 'react';
import { ColorContext } from '../App';


function ColorPicker () {
 
  const { setClickedColor } = useContext(ColorContext);

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

function Pixel () {

  const [myColor, setMyColor] = useState('#fff');
  const { clickedColor } = useContext(ColorContext);
  return <div 
          style={{ height: '20px', width: '20px', backgroundColor: myColor, margin: '1px', border: '1px solid grey' }}
          onClick={() => setMyColor(clickedColor)}
          />
        }

function Pixels () {
  const pixels = []
  for (let i = 0; i < 100; i++) pixels.push(<Pixel key={i} />)
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', width: '210px', margin: '0 auto' }}>
      {pixels}
    </div>
  )
}

export default function PixelArt () {
  return (
    <div>
      <ColorPicker />
      <Pixels />
    </div>
  )
}

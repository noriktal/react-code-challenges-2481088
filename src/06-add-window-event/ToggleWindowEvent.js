import { useState, useEffect } from 'react'
import WindowEvent from './WindowEvent'

const alertMe = () => {alert('you have double clicked me!')};

export default function ToggleWindowEvent () {
  const [windowEvent, setWindowEvent] = useState(false);

  useEffect(() => {
    if(windowEvent){
      window.addEventListener('dblclick', alertMe);
    }else{
      window.removeEventListener('dblclick', alertMe);
    }
    return () => {
     window.removeEventListener('dblclick', alertMe);
    }
  }, [windowEvent])
  


  return (
    <div>
      <button onClick={() => setWindowEvent(prevState => !prevState)}>Toggle Window Event</button>
      {windowEvent && <WindowEvent />}
    </div>
  )
}

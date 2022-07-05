import { useState, useEffect } from "react";

export default function DogPics () {

  const [url, setUrl] = useState('');

  async function fetchDog(){
    try{
      const res = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await res.json();
      setUrl(data.message)
    }catch(err){
      console.log('error:', err.message);
    }
  }

  const handleClick = () => {
    fetchDog();
  }

  useEffect(() => {
    fetchDog();
  }, [])

  // API: https://dog.ceo/dog-api/
  return (
    <div className='dog-pics'>
      <img src={url} width='300px' />
      <button onClick={handleClick}>🐶</button>
    </div>
  )
}

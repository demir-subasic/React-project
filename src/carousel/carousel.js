import React, {useState} from 'react'


const Carousel = () => {
   
    const images = [
        "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      ];

      const [current, setCurrent] = useState(0)

      const handlePrevious = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1)
      };

      const handleNext = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
      }
  return (
    <div className='carousel' style={{display: 'flex', justifyContent: 'centar', alignItems: 'center'}}>
      <button className='previous btn' onClick={handlePrevious}>⬅</button>
      <img src={images[current]} alt="slika" style={{width: '300px', height: '300px'}}/>
      <button className='next btn' onClick={handleNext}>⮕</button>

    
    </div>
  )
}

export default Carousel

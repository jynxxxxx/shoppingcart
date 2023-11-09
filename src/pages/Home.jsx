import { useState, useEffect } from 'react';
import '../css/Home.css';

const imageFilenames = [
  'sale.jpg',
  '1212sale.jpg',
  'blackfriday.jpg',
];

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0);

  function showSlide(index) {
    setSlideIndex(index);
  }

  function nextSlide() {
    setSlideIndex((slideIndex + 1) % imageFilenames.length);
  }

  function prevSlide() {
    setSlideIndex((slideIndex - 1 + imageFilenames.length) % imageFilenames.length);
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="maincontainer">
        <object className="arrow back" data="/leftarrow.png" onClick={prevSlide}></object>
        <div className="slider" style={{ transform: `translateX(-${slideIndex * 100}%)` }}>
          {imageFilenames.map((filename, index) => (
            <div
              key={index}
              className={`picturecontainer ${index === slideIndex ? ' active' : ''}`}
            >
              <img className="pic" src={`/${filename}`} alt="sale banner" />
            </div>
          ))}
        </div>
        <object className="arrow next" data="/rightarrow.png" onClick={nextSlide}></object>
      </div>
      <div className="circles">
        {imageFilenames.map((filename, index) => (
          <object
            key={index}
            className={`circle${index === slideIndex ? ' active' : ''}`}
            data="/circle.png"
            onClick={() => showSlide(index)}
          ></object>
        ))}
      </div>
    </>
  );
}

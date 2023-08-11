import React, { useState, useEffect } from 'react';
import captions from './captions.json'; // Importa o arquivo JSON


const ImageGallery = () => {
  const [selected, setSelected] = useState(null);
  const COUNT = 71;

  const handleExpansion = (index) => {
    if (selected === index) {
      setSelected(null);
    } else {
      setSelected(index);
    }
  };

  return (
    <ul className="grid">
      {Array.from({ length: COUNT }, (_, index) => (
        <li
          key={index}
          className={`gallery-item ${selected === index ? 'full' : ''}`}
          onClick={() => handleExpansion(index)}
        >
          <button>
            <img
              src={`http://localhost/adventure-of-my-lifetime/imagens/IMG_${index + 1}.JPG`}  // Substitua pelo caminho correto da imagem
              alt={`Image ${index + 1}`}
            />
          </button>
          {selected === index && (
            <div className="caption-container">
              <div className="caption">
                {captions[index]}
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;

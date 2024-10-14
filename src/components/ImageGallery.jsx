// ImageGallery.js
import React, { useState } from "react";
import captions from "./captions.json";
import imageUrls from "./imgUrls.js";

const ImageGallery = () => {
  const [selected, setSelected] = useState(null);

  const handleExpansion = (index) => {
    setSelected(selected === index ? null : index);
  };

  return (
    <ul className="grid">
      {imageUrls.map((url, index) => (
        <li
          key={index}
          className={`gallery-item ${selected === index ? "full" : ""}`}
          onClick={() => handleExpansion(index)}
        >
          <button>
            <img
              src={`${url}?q_auto,f_auto`}
              alt={`Imagem ${index + 1}`}
              loading="lazy"
            />
          </button>
          {selected === index && captions[index] && (
            <div className="caption-container">
              <div className="caption">{captions[index]}</div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;

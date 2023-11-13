import React from 'react';
import '../Pages/Homepage.css';
import image1 from '../Assets/Reactjs.png';
import image2 from '../Assets/javascript.png';
import image3 from '../Assets/Css.png';
import image4 from '../Assets/Html.png';
import image5 from '../Assets/Bootstrap.png';
import image6 from '../Assets/Figma.png';
import image7 from '../Assets/photoshop.png';
import image8 from '../Assets/Illustrator.png';
const ImageGrid = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8];

  return (
    <div className="image-container">
      <div className="rowimg">
        {images.slice(0, 4).map((image, index) => (
          <div key={index} className="columnimg">
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="rowimg">
        {images.slice(4).map((image, index) => (
          <div key={index} className="columnimg">
            <img src={image} alt={`Image ${index + 5}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
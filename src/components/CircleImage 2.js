import React from 'react';
import '../App.css';
import localImage from '../logo.svg'; // 任意の画像を挿入

const CircleImage = ({ imageUrl, altText }) => {
    const imageSrc = imageUrl || localImage;
    return (
      <div className="border-radius">
        <img src={imageSrc} alt={altText} className="circle-image" />
      </div>
    );
  };
  
  export default CircleImage;
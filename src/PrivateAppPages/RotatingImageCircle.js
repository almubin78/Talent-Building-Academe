// client/src/components/RotatingImageCircle.jsx
import React, { useState, useEffect } from 'react';

const RotatingImageCircle = ({
  images = [],
  radius = 200,
  rotationSpeed = 12,
  imageSize = 100,
  centerContent = null,
  className = '',
}) => {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setAngle((prevAngle) => (prevAngle + 0.5) % 360);
    }, (rotationSpeed * 1000) / 720);

    return () => clearInterval(interval);
  }, [rotationSpeed, images.length]);

  if (images.length === 0) {
    return (
      <div className="flex items-center justify-center p-8 bg-gray-100 rounded-lg">
        <p className="text-gray-500">No images to display</p>
      </div>
    );
  }

  // Ensure we have enough images for a good visual
  const displayImages = images.length < 4 ? [...images, ...images, ...images, ...images] : images;

  return (
    <div className={`relative flex items-center justify-center w-full h-full min-h-[400px] ${className}`}>
      <div 
        className="relative" 
        style={{ 
          width: radius * 2, 
          height: radius * 2,
          maxWidth: '100%',
          maxHeight: '100%'
        }}
      >
        {displayImages.map((src, index) => {
          const total = displayImages.length;
          const step = 360 / total;
          const imageAngle = (index * step + angle) % 360;
          const radian = (imageAngle * Math.PI) / 180;

          const x = radius + radius * Math.cos(radian) - imageSize / 2;
          const y = radius + radius * Math.sin(radian) - imageSize / 2;

          return (
            <div
              key={index}
              className="absolute rounded-full overflow-hidden shadow-lg border-2 border-white transition-all duration-100 ease-linear hover:scale-110 hover:z-10 hover:shadow-2xl"
              style={{
                width: imageSize,
                height: imageSize,
                left: x,
                top: y,
                transform: `rotate(${imageAngle}deg)`,
                boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                cursor: 'pointer',
              }}
            >
              <img
                src={src}
                alt={`rotating-img-${index}`}
                className="w-full h-full object-cover"
                style={{ transform: `rotate(${-imageAngle}deg)` }}
                loading="lazy"
              />
            </div>
          );
        })}

        {/* Center circle - can be customized */}
        <div
          className="absolute rounded-full bg-white shadow-xl flex items-center justify-center border-2 border-gray-100"
          style={{
            width: imageSize * 0.9,
            height: imageSize * 0.9,
            left: radius - (imageSize * 0.9) / 2,
            top: radius - (imageSize * 0.9) / 2,
          }}
        >
          {centerContent || (
            <span className="text-sm font-semibold text-gray-700 text-center px-2">
              {images.length} Images
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default RotatingImageCircle;
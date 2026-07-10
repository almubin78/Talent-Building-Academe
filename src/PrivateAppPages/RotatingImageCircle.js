// client/src/components/RotatingImageCircle.jsx
import React, { useState, useEffect, useMemo, useCallback } from 'react';

const RotatingImageCircle = ({
  images = [],
  radius = 200,
  rotationSpeed = 12,
  imageSize = 80,
  centerContent = null,
  className = '',
}) => {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setAngle((prevAngle) => {
        const newAngle = prevAngle + 0.3; // Smaller increment for smoother animation
        return newAngle % 360;
      });
    }, 30); // Update every 30ms for smoother motion

    return () => clearInterval(interval);
  }, [images.length]);

  // Memoize display images to prevent recalculation
  const displayImages = useMemo(() => {
    if (images.length === 0) return [];
    return images.length < 4 ? [...images, ...images, ...images, ...images] : images;
  }, [images]);

  // Memoize the position calculations
  const imagePositions = useMemo(() => {
    const total = displayImages.length;
    if (total === 0) return [];
    
    const step = 360 / total;
    return displayImages.map((src, index) => {
      const imageAngle = (index * step + angle) % 360;
      const radian = (imageAngle * Math.PI) / 180;
      
      return {
        src,
        index,
        imageAngle,
        x: radius + radius * Math.cos(radian) - imageSize / 2,
        y: radius + radius * Math.sin(radian) - imageSize / 2,
        rotateAngle: imageAngle,
      };
    });
  }, [displayImages, angle, radius, imageSize]);

  if (images.length === 0) {
    return (
      <div className="flex items-center justify-center p-8 bg-gray-100 rounded-lg">
        <p className="text-gray-500">No images to display</p>
      </div>
    );
  }

  return (
    <div className={`relative flex items-center justify-center w-full h-full min-h-[400px] ${className}`}>
      {/* py-16 bg-gradient-to-b from-blue-50 to-white */}
      <div 
        className="relative" 
        style={{ 
          width: radius * 2, 
          height: radius * 2,
          maxWidth: '100%',
          maxHeight: '100%'
        }}
      >
        {imagePositions.map(({ src, index, x, y, imageAngle, rotateAngle }) => (
          <div
            key={`${index}-${src}`}
            className="absolute rounded-full overflow-hidden shadow-lg border-2 border-white transition-none hover:scale-110 hover:z-10 hover:shadow-2xl"
            style={{
              width: imageSize,
              height: imageSize,
              left: x,
              top: y,
              transform: `rotate(${rotateAngle}deg)`,
              boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
              cursor: 'pointer',
              backgroundColor: '#f0f0f0',
              willChange: 'transform, left, top', // Optimize for animations
            }}
          >
            <img
              src={src}
              alt={`rotating-img-${index}`}
              className="w-full h-full"
              style={{ 
                objectFit: 'contain',
                transform: `rotate(${-rotateAngle}deg)`,
                padding: '3px',
                pointerEvents: 'none', // Prevent image from capturing mouse events
              }}
              loading="lazy"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/150/cccccc/808080?text=No+Image';
              }}
            />
          </div>
        ))}

        {/* Center circle */}
        <div
          className="absolute rounded-full bg-white shadow-xl flex items-center justify-center border-2 border-gray-100"
          style={{
            width: imageSize * 0.9,
            height: imageSize * 0.9,
            left: radius - (imageSize * 0.9) / 2,
            top: radius - (imageSize * 0.9) / 2,
            zIndex: 5,
            pointerEvents: 'none', // Prevent interaction with center
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
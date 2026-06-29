// client/src/components/RotatingImageCircle.jsx
import React, { useState, useEffect, useMemo } from 'react';

const RotatingImageCircle = ({
  images = [],
  radius = 200,
  rotationSpeed = 12,
  imageSize = 80,
  centerContent = null,
  className = '',
}) => {
  const [angle, setAngle] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Adjust sizes for mobile
  const mobileRadius = isMobile ? Math.min(radius * 0.65, 140) : radius;
  const mobileImageSize = isMobile ? Math.min(imageSize * 0.7, 55) : imageSize;
  const mobileRotationSpeed = isMobile ? rotationSpeed * 0.8 : rotationSpeed;

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setAngle((prevAngle) => {
        const newAngle = prevAngle + 0.3;
        return newAngle % 360;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [images.length]);

  const displayImages = useMemo(() => {
    if (images.length === 0) return [];
    return images.length < 4 ? [...images, ...images, ...images, ...images] : images;
  }, [images]);

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
        x: mobileRadius + mobileRadius * Math.cos(radian) - mobileImageSize / 2,
        y: mobileRadius + mobileRadius * Math.sin(radian) - mobileImageSize / 2,
        rotateAngle: imageAngle,
      };
    });
  }, [displayImages, angle, mobileRadius, mobileImageSize]);

  if (images.length === 0) {
    return (
      <div className="flex items-center justify-center p-8 bg-gray-100 rounded-lg">
        <p className="text-gray-500">No images to display</p>
      </div>
    );
  }

  return (
    <div className={`relative flex items-center justify-center w-full h-full ${className}`}>
      <div 
        className="relative" 
        style={{ 
          width: mobileRadius * 2, 
          height: mobileRadius * 2,
          maxWidth: '100%',
          maxHeight: '100%'
        }}
      >
        {imagePositions.map(({ src, index, x, y, imageAngle, rotateAngle }) => (
          <div
            key={`${index}-${src}`}
            className="absolute rounded-full overflow-hidden shadow-lg border-2 border-white transition-none hover:scale-110 hover:z-10 hover:shadow-2xl"
            style={{
              width: mobileImageSize,
              height: mobileImageSize,
              left: x,
              top: y,
              transform: `rotate(${rotateAngle}deg)`,
              boxShadow: '0 4px 15px rgba(0,0,0,0.12)',
              cursor: 'pointer',
              backgroundColor: '#f0f0f0',
              willChange: 'transform, left, top',
            }}
          >
            <img
              src={src}
              alt={`rotating-img-${index}`}
              className="w-full h-full"
              style={{ 
                objectFit: 'contain',
                transform: `rotate(${-rotateAngle}deg)`,
                padding: isMobile ? '2px' : '3px',
                pointerEvents: 'none',
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
            width: mobileImageSize * 0.9,
            height: mobileImageSize * 0.9,
            left: mobileRadius - (mobileImageSize * 0.9) / 2,
            top: mobileRadius - (mobileImageSize * 0.9) / 2,
            zIndex: 5,
            pointerEvents: 'none',
          }}
        >
          {centerContent || (
            <span className={`text-center px-2 ${isMobile ? 'text-xs' : 'text-sm'} font-semibold text-gray-700`}>
              {images.length} Images
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default RotatingImageCircle;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useRef, useState, useEffect } from 'react';


const FloatingBadge = () => {
  const elementRef = useRef(null);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const TABLET_POINT = 1024;

    let dx = window.innerWidth >= TABLET_POINT ? 2.4 : 1.4;
    let dy = window.innerWidth >= TABLET_POINT ? 1.8 : 1;
    let x = 0;
    let y = 0;
    let rotation = -45;
    const maxRotation = 40;
    let dr = 0.15;

    let animationFrameId;

    const update = () => {
      const el = elementRef.current;
      if (!el) return;

      const maxX = windowSize.width - el.offsetWidth;
      const maxY = windowSize.height - el.offsetHeight;

      if (x + dx > maxX || x + dx < 0) dx = -dx;
      if (y + dy > maxY || y + dy < 0) dy = -dy;

      x += dx;
      y += dy;
      rotation += dr;

      el.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;

      animationFrameId = requestAnimationFrame(update);
    };

    animationFrameId = requestAnimationFrame(update);

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [windowSize]);

  return (
    <div className="save-gaza-r" id="saveGazaElement" ref={elementRef}>
      <div className="svg-holder absolute w-full h-full top-0 left-0 -z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 218 621" className="floating-svg">
          <rect width="1200" height="200" fill="#000" />
          <rect width="1200" height="200" y="200" fill="#fff" />
          <rect width="1200" height="200" y="400" fill="#007a3d" />
          <path d="M0,0 L400,300 L0,600 Z" fill="#ce1126" />
        </svg>
      </div>
      <div className="save-gaza flex flex-col items-center">
        <span className="bg-white">FREE</span>
        <span className="bg-white">PALESTINE</span>
      </div>
    </div>
  );
};

export default FloatingBadge;



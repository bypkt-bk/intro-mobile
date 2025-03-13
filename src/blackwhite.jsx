import React, { useState } from 'react';
import "./blackwhite.css";
const BlackWhite = () => {
  const [isBlack, setIsBlack] = useState(false);
  const toggleBackground = () => {
    setIsBlack(!isBlack);
  };

  return (
    <div
      style={{
        backgroundColor: isBlack ? 'black' : 'white',
        color: isBlack ? 'white' : 'black',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <button className='toggle' onClick={toggleBackground} style={{
        backgroundColor: isBlack ? 'white' : 'black',
        color: isBlack ? 'black' : 'white',
        boxShadow: isBlack
          ? '0px 0px 28px 10px rgba(255, 255, 255, 0.25)'
          : '0px 0px 28px 10px rgba(0, 0, 0, 0.25)',
      }}>toggle</button>
        <a href="/" className='previous'>
          <button>Previous</button>
        </a>
        <a href="/tax" className='next'>
          <button>Next</button>
        </a>
    </div>
  );
};

export default BlackWhite;

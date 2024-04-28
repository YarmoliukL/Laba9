import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.css'; 

const Light = ({ backgroundColor, count, onClick, isBlinking = false }) => {
  const [isLit, setIsLit] = useState(false);

  useEffect(() => {
    if (isBlinking) {
      const interval = setInterval(() => {
        setIsLit((prev) => !prev);
      }, 500);

      return () => clearInterval(interval);
    }
  }, [isBlinking]); 

  return (
    <div
      className={`traffic-light ${isLit ? 'lit' : ''}`} 
      style={{ backgroundColor }}
      onClick={onClick}
    >
      {count}
    </div>
  );
};

Light.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  isBlinking: PropTypes.bool, 
};

Light.defaultProps = {
  isBlinking: false, 
};

export default Light;

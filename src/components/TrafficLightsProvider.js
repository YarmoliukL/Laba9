import React, { useState, useEffect } from 'react';

const TrafficLightsContext = React.createContext({
  color: 'red',
  clicks: 0,
});

const TrafficLightsProvider = ({ children }) => {
  const [color, setColor] = useState('red');
  const [clicks, setClicks] = useState(0);


  const changeColor = () => {
    const nextColor = color === 'red' ? 'yellow' : 'green';
    setColor(nextColor);
    setClicks(clicks + 1);
  };

  
  useEffect(() => {
    fetch('http://localhost:3000/traffic-lights')
      .then((response) => response.json())
      .then((data) => {
        setColor(data.color);
        setClicks(data.clicks);
      })
      .catch((error) => console.error(error));
  }, []);

  
  useEffect(() => {
    fetch('http://localhost:3000/traffic-lights', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ color, clicks }),
    })
      .then((response) => response.json())
      .catch((error) => console.error(error));
  }, [color, clicks]);

  return (
    <TrafficLightsContext.Provider value={{ color, clicks, changeColor }}>
      {children}
    </TrafficLightsContext.Provider>
  );
};

export { TrafficLightsContext, TrafficLightsProvider };

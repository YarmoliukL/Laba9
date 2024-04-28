import { useState } from "react";
import "./styles.css";
import PropTypes from "prop-types";
import Light from "./Light";

const TrafficLight = ({ config }) => {
  const [activeColor, setActiveColor] = useState("gray");
  const [count, setCount] = useState({
    red: 0,
    yellow: 0,
    green: 0,
  });

  const handleLightClick = (color) => {
    setCount((prevCount) => ({
      ...prevCount,
      [color]: prevCount[color] + 1,
    }));
    setActiveColor(color);
  };

  return (
    <div className="traffic-light-container">
      {Object.keys(config).map((color) => (
        <Light
          key={color}
          color={color}
          backgroundColor={
            activeColor === color ? config[color].backgroundColor : "gray"
          }
          onClick={() => handleLightClick(color)}
          count={count[color]}
        />
      ))}
    </div>
  );
};

TrafficLight.propTypes = {
  config: PropTypes.object.isRequired,
};

export default TrafficLight;

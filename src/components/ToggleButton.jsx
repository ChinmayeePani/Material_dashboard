import React from "react";
import "./ToggleButton.css";

const ToggleButton = () => {
  return (
    <label class="switch">
      <input type="checkbox" />
      <span className="slider" />
    </label>
  );
};

export default ToggleButton;

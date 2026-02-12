import { useState } from "react";
import "./style.css";
function Switch({
  defaultValue = false,
  handleToggle = () => {},
  label = "Switch",
}) {
  const [isOn, setIsOn] = useState(defaultValue);

  const handleToggleChange = () => {
    setIsOn((prev) => !prev);
    handleToggle();
  };
  return (
    <div className="switch">
      <label>
        <input
          type="checkbox"
          role="switch"
          aria-label={label}
          aria-checked={isOn}
          checked={isOn}
          onChange={handleToggleChange}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
}

export default Switch;

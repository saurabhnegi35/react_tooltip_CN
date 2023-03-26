import Tooltip from "./components/Tooltip";
import Title from "./components/Title";
import { useState } from "react";
import "./App.css";

function App() {
  const [position, setPosition] = useState("top");

  const handleClick = (pos) => {
    setPosition(pos);
  };

  return (
    <div>
      {/* Main Heading of the Application */}
      <Title />

      {/* Main Container for the Hover Button and Hover Side Button*/}
      <div className="mainContainer">
        <Tooltip
          content="Thanks for hovering. I'am the Tooltip"
          position={position}
        >
          <button type="Submit">Hover Over Me</button>
        </Tooltip>

        <div className="buttonContainer">
          <button
            className={position === "top" ? "btn active" : "btn"}
            onClick={() => handleClick("top")}
          >
            TOP
          </button>
          <button
            className={position === "bottom" ? "btn active" : "btn"}
            onClick={() => handleClick("bottom")}
          >
            BOTTOM
          </button>
          <button
            className={position === "left" ? "btn active" : "btn"}
            onClick={() => handleClick("left")}
          >
            LEFT
          </button>
          <button
            className={position === "right" ? "btn active" : "btn"}
            onClick={() => handleClick("right")}
          >
            RIGHT
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

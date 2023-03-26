import React, { useState } from "react";
import "./Tooltip.css";

const Tooltip = ({ position, content, children }) => {
  let timeout;
  //State for the Setting Hover Message
  const [onHover, setOnHover] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setOnHover(true);
    }, 500);
  };

  const pos = position;
  console.log(pos);

  const hideTip = () => {
    clearInterval(timeout);
    setOnHover(false);
  };

  return (
    <div className="wrapper" onMouseEnter={showTip} onMouseLeave={hideTip}>
      {children}
      {onHover && <div className={`${pos}`}>{content}</div>}
    </div>
  );
};

export default Tooltip;

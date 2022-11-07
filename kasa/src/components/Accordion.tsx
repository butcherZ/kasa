import React, { useState } from "react";

type Props = {
  title: string;
  content?: string;
};

const activeStyle = { animation: "inAnimation 0.6s ease-in" };
const inactiveStyle = {
  animation: "outAnimation 0.6s ease-out",
};

const Accordion = ({ title, content }: Props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <button
        className="accordion-title"
        onClick={() => setIsActive(!isActive)}
      >
        <p>{title}</p>
      </button>
      {isActive && (
        <div
          className="accordion-content"
          style={isActive ? activeStyle : inactiveStyle}
          onAnimationEnd={() => {
            if (!isActive) setIsActive(false);
          }}
        >
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;

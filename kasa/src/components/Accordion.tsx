import React, { useState } from "react";
import arrowUp from "../image/arrowUp.png";
import arrowDown from "../image/arrowDown.png";

type Props = {
  title: string;
  content: string | string[];
};

const activeStyle = { animation: "inAnimation 0.6s ease-in" };
const inactiveStyle = {
  animation: "outAnimation 0.6s ease-out",
};

const renderContent = (content: any) => {
  if (Array.isArray(content)) {
    return content.map((x, index) => <p key={index}>{x}</p>);
  }
  return (
    <>
      <p>{content}</p>
    </>
  );
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
        {isActive ? (
          <img src={arrowUp} alt="arrow up" style={{ width: "16px" }} />
        ) : (
          <img src={arrowDown} alt="arrow down" style={{ width: "16px" }} />
        )}
      </button>
      {isActive && (
        <div
          className="accordion-content"
          style={isActive ? activeStyle : inactiveStyle}
          onAnimationEnd={() => {
            if (!isActive) setIsActive(false);
          }}
        >
          {renderContent(content)}
        </div>
      )}
    </div>
  );
};

export default Accordion;

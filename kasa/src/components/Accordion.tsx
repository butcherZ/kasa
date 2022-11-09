import React, { useState } from "react";

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

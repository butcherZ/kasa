import { useState } from "react";

type Props = {
  slides: string[];
};
const ImageSlider = ({ slides }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    height: "100%",
    position: "relative",
  } as React.CSSProperties;
  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: 5,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex]})`,
  } as React.CSSProperties;

  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: 32,
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  } as React.CSSProperties;

  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: 32,
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  } as React.CSSProperties;

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div style={sliderStyles} id="slider">
      {slides.length && (
        <>
          <div style={leftArrowStyles} onClick={goToPrevious}>
            {"<"}
          </div>
          <div style={rightArrowStyles} onClick={goToNext}>
            {">"}
          </div>
        </>
      )}
      <div style={slideStyles} id="slide"></div>
    </div>
  );
};

export default ImageSlider;

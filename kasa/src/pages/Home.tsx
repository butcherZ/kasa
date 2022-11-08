import { Hero } from "../components/Hero";
import image from "../image/hero.png";
import { Gallery } from "../components/Gallery";

export const Home = () => {
  const text = "Home anywhere and everywhere";
  return (
    <>
      <Hero text={text} image={image} />
      <Gallery />
    </>
  );
};

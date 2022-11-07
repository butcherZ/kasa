import { Hero } from "../components/Hero";
import image from "../image/hero.png";

export const Home = () => {
  const text = "Home anywhere and everywhere";
  return (
    <>
      <Hero text={text} image={image} />
    </>
  );
};

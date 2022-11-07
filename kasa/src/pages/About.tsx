import { Hero } from "../components/Hero";
import image from "../image/hero_about.png";
import Accordion from "../components/Accordion";
import { accordion } from "../utils/content";

export const About = () => {
  return (
    <>
      <Hero image={image} />
      <div className="accordion">
        {accordion.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </>
  );
};

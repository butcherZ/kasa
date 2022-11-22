type Props = {
  image: string;
  text?: string;
};
export const Hero = ({ text, image }: Props) => {
  return (
    <div
      id="hero"
      style={{
        backgroundImage: `url('${image}')`,
      }}
    >
      <h1 className="hero-text">{text}</h1>
    </div>
  );
};

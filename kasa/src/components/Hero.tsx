type Props = {
  image: string;
  text?: string;
};
export const Hero = ({ text, image }: Props) => {
  return (
    <div
      style={{
        backgroundImage: `url('${image}')`,
        height: 200,
        width: "100%",
        borderRadius: 20,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      <h1 className="hero-text">{text}</h1>
    </div>
  );
};

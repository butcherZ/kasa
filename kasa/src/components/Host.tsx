type Props = {
  name: string;
  image: string;
};

const Host = ({ name, image }: Props) => {
  return (
    <>
      <div className="host">
        <p>{name}</p>
        <img src={image} alt="host" />
      </div>
    </>
  );
};

export default Host;

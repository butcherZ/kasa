type Props = {
  name: string;
  image: string;
};

const Host = ({ name, image }: Props) => {
  return (
    <>
      <div>
        <p>{name}</p>
        <img src={image} alt="host" />
      </div>
    </>
  );
};

export default Host;

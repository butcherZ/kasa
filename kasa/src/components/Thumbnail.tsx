type Props = {
  title: string;
  location: string;
  image: string;
};

export const Thumbnail = ({ title, location, image }: Props) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to top, rgba(255,96,96,1), rgba(255,96,96,0) 50%), url('${image}')`,
        height: 340,
        width: 340,
        objectFit: "cover",
        borderRadius: 10,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
      }}
      className="thumbnail"
    >
      <div className="thumbnail-description">
        <h3 className="thumbnail-title">{title}</h3>
        <p className="thumbnail-location">{location}</p>
      </div>
    </div>
  );
};

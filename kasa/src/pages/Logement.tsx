import { useLoaderData } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";
import Host from "../components/Host";
import Rate from "../components/Rate";
import Accordion from "../components/Accordion";

type HostT = {
  name: string;
  picture: string;
};
type Data = {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: HostT;
  rating: string;
  location: string;
  Amenities: string[];
  tags: string[];
};

export const Logement = () => {
  const {
    title,
    pictures,
    description,
    host,
    rating,
    location,
    Amenities,
    tags,
  } = useLoaderData() as Data;

  return (
    <>
      <div
        style={{
          width: "100%",
          height: 415,
          margin: "0 auto",
        }}
      >
        <ImageSlider slides={pictures} />
      </div>
      <div>{title}</div>
      <div>{location}</div>
      <Host name={host.name} image={host.picture} />
      <Rate rating={rating} />
      {tags.map((x) => {
        return <div>{x}</div>;
      })}
      <Accordion title="description" content={description} />
      <Accordion title="Amenities" content={Amenities} />
    </>
  );
};

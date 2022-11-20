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
      <div
        className="info-wrapper"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "2rem 0",
        }}
      >
        <div style={{ width: "100%" }}>
          <div className="logement-info">
            <h2>{title}</h2>
            <p>{location}</p>
          </div>
          <div className="logement-tags">
            {tags.map((x, index) => {
              return <p key={index}>{x}</p>;
            })}
          </div>
        </div>

        <div id="host-rate">
          <Host name={host.name} image={host.picture} />
          <Rate rating={rating} />
        </div>
      </div>
      <div className="description-wrapper">
        <div className="logement-accordion">
          <Accordion title="description" content={description} />
        </div>
        <div className="logement-accordion">
          <Accordion title="Amenities" content={Amenities} />
        </div>
      </div>
    </>
  );
};

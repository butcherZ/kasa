import { useLoaderData } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";

type Host = {
  name: string;
  picture: string;
};
type Data = {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: Host;
  rating: string;
  location: string;
  Amenities: string[];
  tags: string[];
};

export const Logement = () => {
  const data = useLoaderData() as Data;

  console.log("data is", data);
  return (
    <>
      <div
        style={{
          width: "100%",
          height: 415,
          margin: "0 auto",
        }}
      >
        <ImageSlider slides={data.pictures} />
      </div>
    </>
  );
};

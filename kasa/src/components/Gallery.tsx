import { Link } from "react-router-dom";
import { data } from "../utils/data";
import { Thumbnail } from "./Thumbnail";

export const Gallery = () => {
  return (
    <div className="gallery">
      {data.map((x) => {
        return (
          <Link to={`logement/${x.id}`} key={x.id}>
            <Thumbnail
              title={x.title}
              location={x.location}
              image={x.cover}
              key={x.id}
            />
          </Link>
        );
      })}
    </div>
  );
};

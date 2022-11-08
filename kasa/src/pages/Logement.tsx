import { useLoaderData } from "react-router-dom";

export const Logement = () => {
  const data: any = useLoaderData();

  console.log("data is", data);
  return <div>{data?.title}</div>;
};

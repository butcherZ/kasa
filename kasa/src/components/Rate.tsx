type Props = {
  rating: string;
};
const renderStars = (rating: number) => {
  let stars = [];
  let checked = 0;
  for (let i = 1; i < rating; i++) {
    stars.push(<span className="fa fa-star checked"></span>);
    checked = i;
  }
  for (let i = checked; i < 5; i++) {
    stars.push(<span className="fa fa-star"></span>);
  }
  return stars;
};
const Rate = ({ rating }: Props) => {
  return (
    <>
      <div>{renderStars(parseInt(rating))}</div>
    </>
  );
};

export default Rate;

import Rating from "@mui/material/Rating";

interface Props {
  value: number;
}

const MRating = ({ value }: Props) => {
  return (
    <Rating
      name="movie-rating"
      value={value}
      // onChange={handleRatingChange}
      readOnly
    />
  );
};

export default MRating;

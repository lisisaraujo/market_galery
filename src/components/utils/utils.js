export const Loading = ({ type, color, height, width }) => (
  <ReactLoading type={type} color={color} height={height} width={height} />
);

export const random = (maxNumber) => {
  return Math.floor(Math.random() * maxNumber * 1);
};

export const URL = `https://api.unsplash.com/search/photos/`;

export const containerStyle = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  maxWidth: "1000px", // Adjust the width as needed
  margin: "0 auto",
};

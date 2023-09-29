export default function Button({ name, onClick }) {
  const buttonStyle = {
    borderRadius: "50px",
    padding: "10px 20px",
    background: "rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    color: "white",
    border: "solid 0.05px",
    outline: "none",
    marginTop: "20px",
  };
  return (
    <button onClick={onClick} style={buttonStyle}>
      {name}
    </button>
  );
}

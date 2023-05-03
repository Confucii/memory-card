import "../styles/Card.css";

export default function Card({ name, image, handleClick }) {
  return (
    <div className="Card" onClick={handleClick}>
      <img src={image} alt={`${name}`} width={165} />
      <p>{name}</p>
    </div>
  );
}

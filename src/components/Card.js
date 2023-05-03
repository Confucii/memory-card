import "../styles/Card.css";

export default function Card({ name, image, handleClick }) {
  return (
    <div className="Card" onClick={handleClick}>
      <img src={image} alt={`${name}`} width={175} />
      <p>{name}</p>
    </div>
  );
}

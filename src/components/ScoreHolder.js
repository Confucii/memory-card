import "../styles/ScoreHolder.css";

export default function ScoreHolder({ string, score }) {
  return <div className="Score-Holder">{`${string}: ${score}`}</div>;
}

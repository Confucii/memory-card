import { useState } from "react";
import "../styles/CardHolder.css";
import { default as defaultCards } from "./cards";
import Card from "./Card";

export default function CardHolder({ incrementScore, setHighScore }) {
  const [cards, setCards] = useState(shuffleArray());

  function shuffleArray(arr = defaultCards) {
    const shuffledArray = [...arr];

    for (let i = shuffledArray.length - 1; i > 0; i -= 1) {
      let j = Math.floor(Math.random() * (i + 1));

      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }

    return shuffledArray;
  }

  function cardIsClicked(cardName) {
    return cards.map((card) => {
      if (cardName === card.name) {
        return {
          ...card,
          clicked: true,
        };
      }
      return card;
    });
  }

  function handleClick(e) {
    const cardName = e.currentTarget.lastChild.textContent;
    const isClicked = cards.find((card) => card.name === cardName).clicked;
    console.log();
    if (!isClicked) {
      incrementScore();
      setCards(shuffleArray(cardIsClicked(cardName)));
    } else {
      setHighScore();
      setCards(shuffleArray());
    }
  }

  return (
    <div className="Card-Holder">
      {cards.map((card) => {
        return (
          <Card
            name={card.name}
            image={card.image}
            clicked={card.clicked}
            key={card.name}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
}

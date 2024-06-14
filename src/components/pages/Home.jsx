import Section from "../organisms/Section";
import { useEffect, useState } from "react";
import "./Home.css";

const imagenes = [
  "c++.png",
  "css.svg",
  "html.png",
  "nodejs.png",
  "js.png",
  "python.png",
  "react.png",
  "ruby.png",
];

function Home() {
  const [shuffleCards, setShuffleCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    resetGame();
  }, []);

  const handleClick = (image) => {
    const flippedCard = { ...image, flipped: true };
    let shuffleCardsCopy = [...shuffleCards];
    shuffleCardsCopy.splice(image.index, 1, flippedCard);
    setShuffleCards(shuffleCardsCopy);

    if (selectedCard === null) {
      setSelectedCard(image);
    } else if (selectedCard.image === image.image) {
      setSelectedCard(null);
    } else {
      setAnimated(true);
      setTimeout(() => {
        shuffleCardsCopy.splice(image.index, 1, image);
        shuffleCardsCopy.splice(selectedCard.index, 1, selectedCard);
        setShuffleCards(shuffleCardsCopy);
        setSelectedCard(null);
        setAnimated(false);
      }, 1000);
    }
  };

  const resetGame = () => {
    const doubledImages = [...imagenes, ...imagenes];
    const shuffledCards = shuffle(doubledImages);
    setShuffleCards(
      shuffledCards.map((image, i) => ({ index: i, image, flipped: false }))
    );
    setSelectedCard(null);
    setAnimated(false);
  };

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return (
    <div id="box-home">
      <button onClick={resetGame} className="button">Reiniciar Juego</button>
      <Section
        imagenes={shuffleCards}
        animated={animated}
        handleClick={handleClick}
      />
    </div>
  );
}

export default Home;

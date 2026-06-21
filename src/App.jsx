import './App.css'
import { useState } from 'react'
import cards, { starterCard } from "./data/cards.js"
import Flashcard from "./components/Flashcard.jsx"

const allCards = [
  ...cards.animals,
  ...cards.food,
  ...cards.city
];

const getRandomCard = () => {
  const randomIndex = Math.floor(Math.random() * allCards.length);
  return allCards[randomIndex];
}


const App =  ()  => {
  const [currentCard, setCurrentCard] = useState(starterCard);
  const [showAnswer, setShowAnswer] = useState(false);
  const [history, setHistory] = useState([]);
  const [future, setFuture] = useState([]);

  const handleNextCard = () => {

    // temp variable to compare the next card to the current one
    let next = getRandomCard();
    
    // reroll if the next card is the same
    while (currentCard.question === next.question) {
      next = getRandomCard();
    }

    if (future.length > 0) {
      const nextFromFuture = future[future.length - 1];

      setFuture(f => f.slice(0, -1));
      setHistory(h => [...h, currentCard]);
      setCurrentCard(nextFromFuture);
      setShowAnswer(false);
      return;
    }
    
    setHistory(h => [...h, currentCard]);
    setCurrentCard(next);
    setShowAnswer(false);
  }

  const handlePrevCard = () => {
    if (history.length === 0) return;
    const prev = history[history.length - 1];
    setHistory(h => h.slice(0, -1));
    // push current into future so we can go forward again
    setFuture(f => [...f, currentCard]);
    setCurrentCard(prev);
    setShowAnswer(false);
  }

  return (
    <div className="App">
      <h1>Learn Ukrainian</h1>
      <h2>Practice Ukrainian vocabulary with simple flashcards 
        designed to help you learn new words quickly and easily</h2>
      <p>Number of cards: {allCards.length}</p>
      
      <Flashcard card={currentCard} key={currentCard.question} showAnswer={showAnswer} setShowAnswer={setShowAnswer} />

      <div className="buttons-container">
        <button className="previous-card" onClick={handlePrevCard} disabled={history.length === 0}>
          Previous Card
        </button>
        <button className="next-card" onClick={handleNextCard}>
          Next card
        </button>
      </div>

    </div>
  )
}

export default App
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
  const [shuffle, setShuffle] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleNextCard = () => {

    // when shuffle is enabled uses random selection 
    if (shuffle) {
      let next = getRandomCard();
      while (currentCard.question === next.question) {
        next = getRandomCard();
      }
      
      // checks if there is a forward stack, pops the last future card and displays it
      if (future.length > 0) {
        const nextFromFuture = future[future.length - 1];
        setFuture(f => f.slice(0, -1));   // removes the last item from future
        setHistory(h => [...h, currentCard]); // pushes that item into history to enable returning to it
        setCurrentCard(nextFromFuture);
        setShowAnswer(false);
        return;
      }

      setHistory(h => [...h, currentCard]);
      setCurrentCard(next);
      setShowAnswer(false);
      return;
    }

    // ordered mode without wrap-around
    const idx = currentIndex;
    if (idx === null) {
      setCurrentIndex(0);
      setCurrentCard(allCards[0]);
      setShowAnswer(false);
      return;
    }

    if (idx < allCards.length - 1) {
      setCurrentIndex(idx + 1);
      setCurrentCard(allCards[idx + 1]);
      setShowAnswer(false);
    }
  }

  const handlePrevCard = () => {
    if (shuffle) {
      if (history.length === 0) return;
      const prev = history[history.length - 1];
      setHistory(h => h.slice(0, -1));
      setFuture(f => [...f, currentCard]);
      setCurrentCard(prev);
      setShowAnswer(false);
      return;
    }

    // Ordered mode, steps backwards through "allCards", if at index 0, goes back to starterCard
    const idx = currentIndex;
    if (idx === null) return; // already at starter

    // 
    if (idx === 0) {
      setCurrentIndex(null);
      setCurrentCard(starterCard);
      setShowAnswer(false);
      return;
    }

    setCurrentIndex(idx - 1);
    setCurrentCard(allCards[idx - 1]);
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
        <button
          className={shuffle ? 'shuffle-button active' : 'shuffle-button'}
          onClick={() => setShuffle(s => !s)}
        >
          {shuffle ? 'Shuffle: On' : 'Shuffle: Off'}
        </button>
        <button className="previous-card" onClick={handlePrevCard} disabled={shuffle ? history.length === 0 : currentIndex === null}>
          Previous Card
        </button>
        <button
          className="next-card"
          onClick={handleNextCard}
          disabled={!shuffle && currentIndex !== null && currentIndex >= allCards.length - 1}
        >
          Next card
        </button>
      </div>

    </div>
  )
}

export default App
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

  const handleNextCard = () => {
    setCurrentCard(getRandomCard());
    setShowAnswer(false);
  }

  return (
    <div className="App">
      <h1>Learn Ukrainian</h1>
      <h2>Practice Ukrainian vocabulary with simple flashcards 
        designed to help you learn new words quickly and easily</h2>
      <p>Number of cards: {allCards.length}</p>
      
      <Flashcard card={currentCard} key={currentCard.question} showAnswer={showAnswer} setShowAnswer={setShowAnswer} />

      <button className="nextCard" onClick={handleNextCard}>
        Next card
      </button>

    </div>
  )
}

export default App
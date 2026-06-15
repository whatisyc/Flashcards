import { useState } from 'react'
import './Flashcard.css'

const Flashcard = ({ card, showAnswer, setShowAnswer }) => {

    const flipFlashcard = () => {
        setShowAnswer(!showAnswer);
    }

    return (
        <div className="flashcard-container" onClick={flipFlashcard}>
            <div className={showAnswer ? `flashcard flipped ${card.topic}` : `flashcard ${card.topic}`}>

                <div className="flashcard-front">
                    {card.image && <img src={card.image} alt={card.question} />}
                    <h3>{card.question}</h3>
                </div>

                <div className="flashcard-back">
                    <h3>{card.answer}</h3>
                </div>
            </div>
        </div>
    )
}

export default Flashcard;
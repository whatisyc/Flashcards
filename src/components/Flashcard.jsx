import { starterCard } from '../data/cards';
import './Flashcard.css'
import { useState } from 'react'

const Flashcard = ({ card, showAnswer, setShowAnswer }) => {

    const [answered, setAnswered] = useState(false);

    const flipFlashcard = () => {
           // does not allow flipping until the user has submitted their guess
           if (!answered && card !== starterCard) return;
           setShowAnswer(prev => !prev);
    }

    const submitGuess = (e) => {
        e?.preventDefault();
        setShowAnswer(true);
        setAnswered(true);
        const normalizedGuess = (guess || '').trim().toLowerCase();
        const normalizedAnswer = (card.answer || '').trim().toLowerCase();
        setResult(normalizedGuess === normalizedAnswer ? 'correct' : 'incorrect');
    }

    const [result, setResult] = useState(null);

    const onKeyDown = (e) => {
        if (e.key === 'Enter') submitGuess(e);
    }

    const [guess, setGuess] = useState('');

    return (
        <div>
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

            {card !== starterCard && (
                <div className="input-container">
                    <form onSubmit={submitGuess} onClick={(e) => e.stopPropagation()}>
                        <input 
                            className={result ? (result === 'correct' ? 'correct-answer' : 'incorrect-answer') : ''}
                            type='text'
                            placeholder='Type your guess here'
                            value={guess}
                            onChange={(e) => setGuess(e.target.value)}
                            onKeyDown={onKeyDown}
                        />
                        <button type='submit'>Show answer</button>
                    </form>
                </div>
            )}

        </div>
    )
}

export default Flashcard;
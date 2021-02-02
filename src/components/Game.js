import React, { useState } from 'react';

import {calculateWinner} from '../helper';
import Board from './Board'

const Game = () => {
    const [boardHistory, setBoardHistory] = useState([Array(9).fill(null)]);
    const [step, setStep] = useState(0);
    const [xNext, setXNext] = useState(true);
    const winner = calculateWinner(boardHistory[step]);

    const handleClick = i => {
        const timeInHistroy = boardHistory.slice(0, step + 1);
        const current = timeInHistroy[step]
        const tiles = [...current];

        if (winner || tiles[i]) return;

        tiles[i] = xNext ? 'X' : 'O'
        setBoardHistory([...timeInHistroy, tiles]);
        setStep(timeInHistroy.length);
        setXNext(!xNext);
    }

    const revertTo = step => {
        setStep(step);
        setXNext(step % 2 === 0);
    }

    const renderBoard = () => (
        boardHistory.map((step, move) => {
            const destination = move ? `Go to move #${move}` : 'Start New Game';
            return (
                <li key={move}>
                    <button onClick={() => revertTo(move)}>{destination}</button>
                </li>
            )
        })
    )

    return(
        <div className='entire-game'>
            <Board tiles={boardHistory[step]} onClick={handleClick} />
            <div className='board-controls'>
                <p>
                    {winner ? 'Winner: ' + winner : 'Next Player: ' + (xNext ? 'X' : 'O')}
                </p>
                {renderBoard()}
            </div>
        </div>
    )
}

export default Game;
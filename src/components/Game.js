import { render } from '@testing-library/react';
import React, { useState } from 'react';

import {calculateWinner} from '../helper';
import Board from './Board'

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xNext, setXNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = i => {
        const boardInstance = [...board];

        if (winner || boardInstance[i]) return;

        boardInstance[i] = xNext ? 'X' : 'O'
        setBoard(boardInstance);
        setXNext(!xNext);
    }

    const revertTo = () => {

    }

    const clearBoard = () => (
        <button onClick={() => setBoard(Array(9).fill(null))}>Start</button>
    )

    return(
        <>
            <Board tiles={board} onClick={handleClick} />
            <div>
                <p>
                    {winner ? 'Winner: ' + winner : 'Next Player: ' + (xNext ? 'X' : 'O')}
                </p>
                {clearBoard()}
            </div>
        </>
    )
}

export default Game;
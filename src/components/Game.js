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

    const renderMoves = () => {

    }

    return(<Board tiles={board} onClick={handleClick} />)
}

export default Game;
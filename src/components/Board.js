import React from 'react';
import Square from './Tile';

const Board = ({ squares, onClick }) => (
    <div>
        <Square value='1' onClick={() => onClick('someValue')} />
    </div>

)

export default Board;
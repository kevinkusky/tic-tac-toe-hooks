import React from 'react';

const Tile = ({onClick, value}) => (
    <button className='tile' onClick={onClick}>
        {value}
    </button>

)

export default Tile;
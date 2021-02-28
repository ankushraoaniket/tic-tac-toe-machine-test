import React from 'react'
import Box from './Box';

const renderSquare = (i, props) => <Box
    value={props.squares[i]}
    onClick={() => props.onClick(i)}
/>

const Board = (props) => <div style={{ height: "60%", width: "100%" }}>
    <div style={{ display: "flex", width: "100%", height: "33%" }}>
        {renderSquare(0, props)}
        {renderSquare(1, props)}
        {renderSquare(2, props)}
    </div>
    <div style={{ display: "flex", width: "100%", height: "33%" }}>
        {renderSquare(3, props)}
        {renderSquare(4, props)}
        {renderSquare(5, props)}
    </div>
    <div style={{ display: "flex", width: "100%", height: "33%" }}>
        {renderSquare(6, props)}
        {renderSquare(7, props)}
        {renderSquare(8, props)}
    </div>
</div>

export default Board
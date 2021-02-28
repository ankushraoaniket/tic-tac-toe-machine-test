import './App.css';
import React, { useState } from 'react';
import Board from './Board';
import { calculateWinner } from './functions/calculateWinner';
import { Button } from 'react-bootstrap';

function App() {

  const [state, setState] = useState({
    history: [
      {
        squares: Array(9).fill(null)
      }
    ],
    stepNumber: 0,
    xIsNext: true,
  })

  const handleClick = (i) => {
    const history = state.history.slice(0, state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = state.xIsNext ? "X" : "O";
    setState(prevState => {
      let newState = {
        ...prevState,
        history: history.concat([
          {
            squares: squares
          }
        ]),
        stepNumber: history.length,
        xIsNext: !state.xIsNext
      }
      return newState
    });
  }

  const onRestartClick = () => {
    setState({
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true
    })
  }

  return (
    <div style={{ width: "100%", height: "100" }}>
      <h1>Tic Tac Toe</h1>
      <div style={{ width: "20vw", height: "30vh" }}>
        <Board squares={state.history[state.stepNumber].squares} onClick={i => handleClick(i)} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Button style={{ width: "6rem", height: "2rem" }} onClick={onRestartClick}>Restart</Button>
          <span>{calculateWinner(state.history[state.stepNumber].squares) ? "Winner is = " + calculateWinner(state.history[state.stepNumber].squares) : null}</span>
          <span>{state.history.length === 10 && !calculateWinner(state.history[state.stepNumber].squares) ? "Match Tied" : null}</span>
        </div>
      </div>
    </div>
  );
}

export default App;

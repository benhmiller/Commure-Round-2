import { useState } from 'react'
// import { Box, Typography } from '@mui/material'
// import axios from 'axios';


function Square({ value, onClick }: { value: string; onClick: () => void }) {
  return <button onClick={onClick}>{value}</button>
}

function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const handleClick = (i: number) => {
    if(squares[i]) {
      return;
    }
    
    const newSquares = [...squares];
    if(xIsNext) {
      newSquares[i] = "X";
      setXIsNext((prev) => !prev);
    }
    else {
      newSquares[i] = "0";
      setXIsNext((prev) => !prev);
    }

    setSquares(newSquares);
  }
  return (
    <>
      <div className="board">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>

    </>
  )
}

function TicTacToe() {
  return (
    <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      height: '100vh',
    }}
  >
      <Board />
    </div>
    
  )
}
export default TicTacToe

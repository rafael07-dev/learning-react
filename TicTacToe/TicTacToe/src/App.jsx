import { useState } from 'react'
import './App.css'

const TURNS = {
  x: 'X',
  o: 'O'
}

function Square({ children, updateBoard, index }) {

  function handleClick() {
    updateBoard(index);
  }

  return <button className='square' onClick={handleClick}>{children}</button>
}

function App() {
  const [turn, setTurn] = useState(TURNS.x)
  const [board, setBoard] = useState(Array(9).fill(null))
  const [winner, setWinner] = useState(null)

  function updateBoard(index) {
    
    if (board[index] || winner) return
    
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.x ? TURNS.o: TURNS.x
    setTurn(newTurn)
    
    const newWinner = checkWinner(newBoard)

    if (newWinner) {
      setWinner(newWinner)
    }else if (checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  function checkWinner(board) {
    const winnerLines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]

    for (let i = 0; i < winnerLines.length; i++) {

      const [a, b, c] = winnerLines[i]

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]
      }
    }
    return false
  }

  function checkEndGame(board) {
    let cont = 0;

    for (let i = 0; i < board.length; i++) {
      if (board[i] != null) {
        for (let x = 0; x < board[i].length; x++) {
          if (board[i][x]) {
            cont = cont + 1;
          }
        } 
      }
    }
    
    if(cont == 9) return true

    return false
  }

  function resetGame() {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.x)
    setWinner(null)
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className='board'>
        {
          board.map((item, index) => (
            <Square key={index} updateBoard={updateBoard} index={index}>
              {item}
            </Square>
          ))
        }
      </div>
      <div><button>Turno: {turn}</button></div>
      <div><button>{winner ? 'Ganador: ' + winner : 'Empate'}</button></div>
      <div><button onClick={resetGame}>Reset game</button></div>
    </>
  )
}

export default App
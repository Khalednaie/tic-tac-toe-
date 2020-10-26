import React, { useState } from "react"
import './compontCss/game.css';
import Sqaure from './suqaure';
import {Helper} from './help';

function TicTacToe() {
  const [squares, setSquare] = useState(Array(9).fill(null))
  const [isXNext, setXNext] = useState(true);
  // const [stepNumber, setStepNumber] = useState(0);
  const winnerLogic = Helper(squares)
  const winner = winnerLogic.winner;
  const winnerIs = winnerLogic.line;

// var num1 = 0
//   if (winner) {
//     num1++ 
//   } else if (winnerLogic.isDraw) {
//     console.log(winnerLogic.isDraw)
//   }
let numplay1 = 0;
let numplay2 = 0;
// let status; 
if (winner) {
  // status = "Hurray the winner is " + winner;
  console.log(winner)
} else if (winnerLogic.isDraw) {
  // status = "It's a Draw";
}
if(winner==="X"){
  numplay1++;
  }
  if (winner === "O") {
  numplay2++
}
 
 
  const rest = () => {
    squares.fill(null);
    const nextSquare = squares.slice();
    console.log(nextSquare)
       setSquare(nextSquare);
  }

  const playAgine = () => {
    console.log(squares)
  }
  
  function Xo(i) {     
    return(
    <Sqaure
      onClick={() => {
          const nextSquare = squares.slice();
          if ( squares[i] === null ) {
                nextSquare[i] = isXNext ? "X" : "O";
                setXNext(!isXNext);
                setSquare(nextSquare);
          }

        }}
        
        value={squares[i]}
        playwinner={winnerIs && winnerIs.includes(i)}
      
      />
     
    ); 
   
}

  return (
    <div>
          <div className='result'>
              <button className='player'>Player Name1</button>
              <button className='player'>Player Name2</button>
              <br />
              <button className='res'>{numplay1}</button>
        <button className='res'>{numplay2}</button>
      </div >
     
      {/* <div className='xo'> */}
      <div className='xo'>
      {Xo(0)}
      {Xo(1)}
      {Xo(2)}
      </div>
      <div className='xo'>
      {Xo(3)}
      {Xo(4)}
      {Xo(5)}
      </div>
      <div className='xo'>
      {Xo(6)}
      {Xo(7)}
      {Xo(8)}
      </div>
     
    <div className='but'>
      <button className='but1' onClick={playAgine}>PlayAgine</button>
        <button className='but2' onClick={rest}>Reset result</button>
           </div>
      </div>
  )
}
export default TicTacToe;
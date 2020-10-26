import React, { useState } from "react"
import './compontCss/game.css';
import Sqaure from './suqaure';
import {Helper} from './help';
var numplay1 = 0;
var numplay2 = 0;
var play1 =0;
var play2=0;
function TicTacToe() {
  const [squares, setSquare] = useState(Array(9).fill(null))
  const [isXNext, setXNext] = useState(true);
  const winnerLogic = Helper(squares)
  
 



  if (winnerLogic.winner === "X") {
    numplay1++
    play1 = numplay1 -1;
  
  }
  else if (winnerLogic.winner === "O") {
    numplay2++
    play2 = numplay1 -1;
}
 
 
  const rest = () => {
    squares.fill(null);
    const nextSquare = squares.slice();
    console.log(nextSquare)
    setSquare(nextSquare);
    play1 = 0
    play2 = 0 
  }

  const playAgine = () => {
    squares.fill(null);
    const nextSquare = squares.slice();
    setSquare(nextSquare);
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
        // playwinner={winnerIs && winnerIs.includes(i)}
      
      />
     
    ); 
   
}

  return (
    <div>
          <div className='result'>
              <button className='player'>Player Name1</button>
              <button className='player'>Player Name2</button>
              <br />
              <button className='res'>{play1}</button>
        <button className='res'>{play2}</button>
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
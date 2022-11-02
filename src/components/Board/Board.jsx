import React from "react";
import Square from "../Square/Square";
import { useContext } from "react";
import { Context } from "../../utils/Context";

export default function Board() {

  const {state} = useContext(Context);

    const renderSquare = (i) => {
      return <Square number={i} playerLetter={state.board[i]} />;
    };
    const status = state.winner ? 'The winner is '+ state.winner : "Next player is " + state.player;
  
    return (
      <React.Fragment>
        <div className="status h2 text-center">{status}</div>
        <div className="board">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </React.Fragment>
    );
  }
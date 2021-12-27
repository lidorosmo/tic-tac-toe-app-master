import React from "react";
import Tile from "./Tile";

const Board = () => {
  const boardArr = Array(9).fill(null); //update to: boardArr = useSelector((state)=>state.boardArr)
  const numOfRows = 3; //update later ti get from store.
  const mappedTiles = boardArr.map((tiles, index) => (
    <Tile index={index} value={boardArr[index]} />
  ));
  return (
    <div
      className="board"
      style={{ gridTemplateColumns: `repeat(${numOfRows}, 1fr)` }}
    >
      {mappedTiles}
    </div>
  );
};

export default Board;

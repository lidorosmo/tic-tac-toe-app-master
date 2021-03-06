import React from "react";
import Tile from "./Tile";
import { useSelector } from "react-redux";

const Board = () => {
  const boardArr = useSelector((state) => state.boardArr);
  const numOfRows = useSelector((state) => state.numOfRows);
  //map returns an array
  const mappedTiles = boardArr.map((tiles, index) => <Tile index={index} />);
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

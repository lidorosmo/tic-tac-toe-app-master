import React from "react";

const Tile = ({ index, value, onTileClick }) => {
  return (
    <div className="tile" key={index}>
      <button className="tile-btn" onClick={onTileClick}>
        X{/* {value} */}
      </button>
    </div>
  );
};

export default Tile;

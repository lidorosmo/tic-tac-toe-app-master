const PlayersNamesChoice = () => {
  return (
    <div className="players-names-choice">
      <form className="players-form">
        <input type="text" placeholder="PlayerX" />
        <input type="text" placeholder="PlayerO" className="second-player-name"/>
        <input type="text" placeholder="Player&Delta;" />
      </form>
    </div>
  );
};

export default PlayersNamesChoice;

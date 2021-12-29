import { useSelector, useDispatch } from "react-redux";
import { player1Name, player2Name, player3Name } from "../../redux/actions";

const PlayersNamesChoice = () => {
  const dispatch = useDispatch();
  const numOfPlayers = useSelector((state) => state.numOfPlayers);

  const player1Div = (
    <input
      type="text"
      placeholder="PlayerX"
      onChange={(event) => {
        dispatch(player1Name(event.target.value));
      }}
    />
  );
  const player2Div = (
    <input
      type="text"
      placeholder="PlayerO"
      className="second-player-name"
      onChange={(event) => {
        dispatch(player2Name(event.target.value));
      }}
    />
  );
  const player3Div = (
    <input
      type="text"
      placeholder="Player&Delta;"
      onChange={(event) => {
        dispatch(player3Name(event.target.value));
      }}
    />
  );

  if (numOfPlayers === 1) {
    return (
      <div className="players-names-choice">
        <form className="players-form">{player1Div}</form>
      </div>
    );
  } else if (numOfPlayers === 2) {
    return (
      <div className="players-names-choice">
        <form className="players-form">
          {player1Div}
          {player2Div}
        </form>
      </div>
    );
  }
  return (
    <div className="players-names-choice">
      <form className="players-form">
        {player1Div}
        {player2Div}
        {player3Div}
      </form>
    </div>
  );
};

export default PlayersNamesChoice;

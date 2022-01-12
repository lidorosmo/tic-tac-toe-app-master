import { useSelector, useDispatch } from "react-redux";
import { player1Name, player2Name, player3Name } from "../../redux/actions";

const PlayersNamesChoice = () => {
  const dispatch = useDispatch();
  const numOfPlayers = useSelector((state) => state.numOfPlayers);

  const text1 = "Choose your name";
  const text2 = "Choose your names";

  return (
    <div className="players-names-choice">
      <label for="players-form">{numOfPlayers === 1 ? text1 : text2}</label>
      <form className="players-form">
        <input
          type="text"
          placeholder="PlayerX"
          onChange={(event) => {
            dispatch(player1Name(event.target.value));
          }}
        />
        {numOfPlayers >= 2 && (
          <input
            type="text"
            placeholder="PlayerO"
            className="second-player-name"
            onChange={(event) => {
              dispatch(player2Name(event.target.value));
            }}
          />
        )}
        {numOfPlayers === 3 && (
          <input
            type="text"
            placeholder="Player&Delta;"
            onChange={(event) => {
              dispatch(player3Name(event.target.value));
            }}
          />
        )}
      </form>
    </div>
  );
};

export default PlayersNamesChoice;

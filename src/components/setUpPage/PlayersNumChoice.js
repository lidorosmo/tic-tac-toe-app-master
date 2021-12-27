import './setUpPage.css';

const PlayersNumChoice = () => {
  return (
    <div className="players-num-choice">
      <label className='players-choice-label'>Choose players</label>
      <div id='playes-radios'>
        <input type="radio" value="1-Player" name="players-num" /> 1 Player
        <input type="radio" value="2-Players" name="players-num" /> 2 Players
        <input type="radio" value="3-Players" name="players-num" /> 3 Players
      </div>
    </div>
  );
};

export default PlayersNumChoice;

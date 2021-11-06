import { useSelector, useDispatch } from "react-redux";
import classes from "./FinalScore.module.css";

const FinalScore = () => {
  const dispatch = useDispatch()
  const latestScore = useSelector((state) => state.latestScore);
  return (
    <div className={classes.finalscore}>
      <h2>Test complete!</h2>Your words-per-minute is <b>{latestScore.wpm}</b> and your accuracy is{" "}
      <b>{latestScore.accuracy}%</b> so, your final score will be...{" "}<br/>
      <b className={classes.score}>{(latestScore.wpm * latestScore.accuracy) / 100} </b> wpm
      <button onClick={()=>{dispatch({type:"restart"})}}>Try Again?</button>
    </div>
  );
};

export default FinalScore;

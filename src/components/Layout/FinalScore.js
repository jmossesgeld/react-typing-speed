import { useSelector } from "react-redux";
import classes from "./FinalScore.module.css";

const FinalScore = () => {
  const latestScore = useSelector((state) => state.latestScore);
  return (
    <div className={classes.finalscore}>
      <h2>Test complete!</h2>Your words per minute is <b>{latestScore.wpm}</b> and your accuracy is{" "}
      <b>{latestScore.accuracy}%</b> thus, your corrected wpm is{" "}
      <b>{(latestScore.wpm * latestScore.accuracy) / 100}</b>.
    </div>
  );
};

export default FinalScore;

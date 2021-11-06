import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import classes from "./Scoreboard.module.css";

const Scoreboard = () => {
  const dispatch = useDispatch();
  const duration = 10;
  const validations = useSelector((state) => state.validations);
  const errors = validations.filter((item) => item === "wrong").length;
  const accuracy = (1 - errors / (validations.length || 0)) * 100;

  const timelapse =
    useSelector((state) => state.currentTimeStamp) - useSelector((state) => state.startTimeStamp);

  const wpm = timelapse > 0 ? (validations.length * 60000) / timelapse : 0;
  const timeRemaining = duration - (timelapse / 1000).toFixed();

  useEffect(() => {
    if (timeRemaining <= 0) {
      dispatch({ type: "postScore", value: { wpm: wpm.toFixed(), accuracy: accuracy.toFixed() } });
    }
  }, [accuracy, dispatch, timeRemaining, wpm]);

  return (
    <div className={classes.container}>
      <span>
        Errors: <b>{errors}</b>
      </span>
      <span>
        Words per minute: <b>{wpm.toFixed(0)}</b>
      </span>
      <span>
        Accuracy: <b>{accuracy.toFixed(0)}</b>%
      </span>
      <span>
        Time Remaining: <b>{timeRemaining}</b>s
      </span>
    </div>
  );
};

export default Scoreboard;

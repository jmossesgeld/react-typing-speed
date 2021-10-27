import styles from "./Words.module.css";
import Word from "./Word";
function Words() {
  const result = "Kingina shit this fucker gagu"
  const words = result.split(" ");

  return (
    <div className={styles}>
      {words.map((word) => (
        <Word text={word}></Word>
      ))}
    </div>
  );
}

export default Words;

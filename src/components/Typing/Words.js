import styles from "./Words.module.css";
import Word from "./Word";
function Words(props) {
  return (
    <div className={styles.words}>
      {props.words.map((word, index) => (
        <Word text={word} key={index}></Word>
      ))}
    </div>
  );
}

export default Words;

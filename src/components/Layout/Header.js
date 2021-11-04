import styles from './Header.module.css'
import Scoreboard from './Scoreboard';

function Heading() {
  return <div className={styles.header}><h1 >Typing Speed Test</h1><Scoreboard/></div>;
};

export default Heading;

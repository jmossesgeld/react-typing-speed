import styles from './Word.module.css'

function Word(props) {
    return <div className={styles.word}>{props.text}</div>
}

export default Word
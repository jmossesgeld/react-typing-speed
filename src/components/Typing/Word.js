const Word = (props)=>{
    return <span className={props.validation} style={{margin:"0.3rem"}}>{props.char}</span>
}

export default Word
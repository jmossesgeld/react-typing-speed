import styles from "./InputText.module.css";
import React, { useContext, useState } from "react";
import WordsContext from "../../store/store";

function InputText(props) {
  const ctx = useContext(WordsContext);
  const [input, setInput] = useState("");

  const inputChangeHandler = (e) => {
    let text = e.target.value;
    if (text.includes(" ")) {
      text = text.replace(" ", "\n");
    }
    setInput(text);
    checkInput(text);
  };

  const determineIndex = (primaryIndex, array) => {
    const sizes = []
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      sizes.push(element.length);     
    }
    let firstIndex = 0
    let secondIndex = 0
    let remainingIndex = primaryIndex
    for (let index = 0; index < sizes.length; index++) {
      const size = sizes[index];
      if (remainingIndex > size) {
        firstIndex++
        remainingIndex-=size        
      } else {
        secondIndex = remainingIndex        
      }
    }
    return [firstIndex, secondIndex]
  }

  const checkInput = (input) => {
    for (let index = 0; index < input.length; index++) {
      const inputChar = input[index];
      const words = ctx.words.join("\n");
      let wordChar = words[index];
      if (inputChar !== wordChar) {
        const [firstIndex, secondIndex] = determineIndex(index, ctx.words)
        let newWord = ""
        for (let j = 0; j < ctx.words[firstIndex].length; j++) {
          const element = ctx.words[firstIndex][j];
          if (j === secondIndex) {
            newWord += wordChar.replace(wordChar, `<span style="color:red">${wordChar}</span>`)
          } else {
            newWord += element            
          }
          
        }
        ctx.setGeneratedText((prev)=>{
          const newState =[...prev]
          newState[firstIndex] = newWord
          return newState
        })
      }
    }
  };

  return (
    <div className={styles["input-text"]}>
      <textarea value={input} onChange={inputChangeHandler} />
    </div>
  );
}

export default InputText;

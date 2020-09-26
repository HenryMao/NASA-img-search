import React, { useContext, useState } from "react";
import Context from "../Context";

export default function Landing (props){
  const [input, setInput] = useState();
  const context = useContext(Context);
  const updateInput = (event)=>{
    setInput(event.target.value);
  }
  return(
    <div>
      <input type="text" placeholder="Seach here..." onChange={updateInput}/>
      <button onClick={()=>{
        context.searchFunc(input)}}>
        Search
      </button>
    </div>
    
  )
}
import React, { useContext, useState } from "react";
import Context from "../Context";
import "./Landing.css"

export default function Landing (props){
  //state to keep track of the input textfield
  const [input, setInput] = useState();
  const context = useContext(Context);
  //update function to be called when the value of input textfield changes
  //it keeps track of the value of the input textfield as the user types
  const updateInput = (event)=>{
    setInput(event.target.value);
  }
  return(
    <div>
      <h2>NASA Image Search</h2>
      <form className="Landing" onSubmit={()=>{
      context.searchFunc(input)}}>
        <input className="SearchInput" type="text" placeholder="&#x1F50E;" onChange={updateInput}/>
        <button type="submit" className="SearchButton" >
          Search
        </button>
      </form>
    </div>

  )
}
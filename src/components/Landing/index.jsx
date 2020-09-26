import React, { useContext, useState } from "react";
import Context from "../Context";
import "./Landing.css"

export default function Landing (props){
  const [input, setInput] = useState();
  const context = useContext(Context);
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
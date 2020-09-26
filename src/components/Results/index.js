import React, { useContext } from "react";
import Pic from "./Pic";
import Context from "../Context";

export default function Results(){
  //use context to gain access of results from app.js
  const context = useContext(Context);
  let dis = context.results.map((result, index)=>{
    if(result.data[0].media_type === "image"){
      return <Pic key={index} result={result}/>
    }
   
  })
  return(<div className="resultsCon">
    {dis}
    </div>);
}
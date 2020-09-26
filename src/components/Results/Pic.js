import React from "react";
import "./Results.css";

export default function Pic (props){
  return(
    <div className="picCon">
      <img className="pic"src={props.result.links[0].href}/>
      <p>
        {props.result.data[0].title}
      </p>
      {/* <p>
        {props.result.data ? props.result.data[0].description : null}
      </p> */}
    </div>
  )
}
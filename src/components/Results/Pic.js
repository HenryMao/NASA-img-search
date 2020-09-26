import React from "react";
import "./Results.css";

export default function Pic (props){
  return(
    <div className="picCon">
      <img className="pic"src={props.result.links[0].href}/>
      <h5>
        {props.result.data[0].title}
      </h5>
      {/* <p>
        {props.result.data ? props.result.data[0].description : null}
      </p> */}
    </div>
  )
}
import React from "react";
import "./Results.css";

export default function Pic (props){
  //custom component displaying each grid with the picture and its title
  //description is omitted as sometimes it's unreasonably long
  return(
    <div className="picCon">
      <img className="pic"src={props.result.links[0].href}/>
      <h5>
        {props.result.data[0].title}
      </h5>
    </div>
  )
}
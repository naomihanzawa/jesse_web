import React, { useState } from 'react';
import './App.css';
import {Link, useHistory} from "react-router-dom";

function Illustration(props) {
const history = useHistory('');

async function handleClick(event){
  event.preventDefault();
  let src = await encodeURIComponent(props.src);
  history.push(`/detail/title=${props.title}/src=${src}`);
  }

  return (
    <div style={{
      margin:"0 auto",
      }}
      onClick={handleClick}>
     <img style={{  
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        alignContent:"flex-start",
        padding: "20px 0",
        width: "350px",
        mixBlendMode: "multiply",
        float:"left"
        }}
        src={props.src}/>
  </div>
  

  );
}

export default Illustration;

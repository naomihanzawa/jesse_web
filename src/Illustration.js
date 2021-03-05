import logo from './logo.svg';
import './App.css';
import hic from './img/hic.jpg';
import styled from 'styled-components'
// import {BrowserRouter, Switch, Route,} from "react-router-dom";

function Illustration(props) {
  return (
    <div style={{
      margin:"0 auto",
      }}>
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

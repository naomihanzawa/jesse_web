import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
// import {BrowserRouter, Switch, Route,} from "react-router-dom";

function Menu() {
  return (
    <div style={{
      margin:"30px"
    }}>
      <h1 style={{  
        display: "flex",
        margin:"0px",
        justifyContent: "center",
        fontStyle: "Myriad Pro",
        fontWeight: "Semibold",
        fontSize: "30px",
        color: "#262626",
        }}>
        Jesse Wray Lee Levanthol</h1>
      <ul>
        <li>Illustration</li>
        <li>Design</li>
        <li>Video</li>
        <li>About</li>
      </ul>
    </div>

  );
}

export default Menu;



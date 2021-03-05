
import styled from 'styled-components'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import Illustration from './Illustration.js';
import Illustration2 from './Illustration2.js';
import hic from './img/hic.jpg';
import bluebeard from './img/./bluebeard.jpg';
import motionwaitdadwasginger from './img/motionwaitdadwasginger.jpg';
import noodles from './img/noodles.jpg';
import smokinglady from './img/smokinglady.png';
import motionframes from './img/motionframes.jpg';
import lal from './img/lal.jpg';
import carti from './img/carti.png';
import jessetshirt from './img/jesse t shirt.png';
import lover from './img/lover.png';
import procrastination from './img/procrastination.png';
import moonlight from './img/moonlight.png';
import scan66 from './img/Scan 66.png';
import smokers from './img/smokers.png';
import stipplerhom from './img/stipplerhom.png';
import pedro from './img/pedro.png';


// import {BrowserRouter, Switch, Route,} from "react-router-dom";

function Illustrations() {
  return (
    <ResponsiveMasonry
    columnsCountBreakPoints={{350: 1, 750: 2, 900: 3, 1300: 4}}>
    <Masonry
    style={{  
      width:"1500px",
      margin:"0 auto"
            }}>   
        <Illustration src={moonlight}/>
        <Illustration src={motionwaitdadwasginger}/>
        <Illustration src={scan66}/>
        <Illustration src={lal}/>
        <Illustration src={noodles}/>
        <Illustration2 src={smokinglady}/>
        <Illustration src={motionframes}/>
        <Illustration src={hic}/>
        <Illustration src={jessetshirt}/>
        <Illustration src={bluebeard}/>
        <Illustration src={carti}/>
        <Illustration src={jessetshirt}/>
        <Illustration2 src={stipplerhom}/>
        <Illustration src={lover}/>
        <Illustration src={procrastination}/>
        <Illustration src={smokers}/>
        <Illustration src={pedro}/>
     </Masonry>
  </ResponsiveMasonry>

  );
}

export default Illustrations;

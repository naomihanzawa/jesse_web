import './App.css';
import moonlight from './img/moonlight.png';
import {useParams} from "react-router-dom";

function Detail() {
  const {src,title} = useParams();
  let decodedSrc= decodeURIComponent(src);
  decodedSrc = decodedSrc.replace('%2Fstatic%2Fmedia%2F','.50ed1a77.png')

  console.log(decodedSrc,'decodedSrc')
  console.log(src,'src')
  console.log(moonlight,'moonlight')

  return (
    <div style={{
      height:"100vh",
      margin:"0",
      display: "flex",
      alignContent: "space-between",
      flexWrap: "wrap"
      }}>
      <div style={{
          fontSize: "40px",
          display: "flex",
          justifyContent: "space-between",
          padding:"20px 30px 0 30px",
          width:"100vw"
          }}>
          <h1 style={{
          fontSize: "40px",
          margin:"0"
          }}>
            {title}
          </h1>
          <p style={{
          margin:"0"
          }}>×</p>
      </div>
      <div style={{
          display: "flex",
          justifyContent: "center",
          alignContent:"center",
          width:"100vw"
        }}>
        <img style={{  
            height: "810px",
            }}
            src={decodedSrc}/>
      </div>
      <ul style={{
          fontSize: "30px",
          display: "flex",
          justifyContent: "space-between",
          padding:"10px 20px",
          width:"100vw"
          }}>
          <li > ＜ </li>
          <li> ＞ </li>
      </ul>
    </div>
  );
}

export default Detail;

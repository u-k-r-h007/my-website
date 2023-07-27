import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImage from '../assets/img/header-img.svg'
import 'animate.css'
import TrackVisibility from "react-on-screen";



const Banner = () => {
const [loopNum , setLoopNum] = React.useState(0);
const [isDeleting , setIsDeleting] = React.useState(false);
const toRotate=["Web Developer" , "Web Designer"]
const [text , setText] = React.useState('')
const [delta, setDelta] = React.useState(300-Math.random()*100);

const period=2000;

React.useEffect(()=>{
let ticker=setInterval(()=>{
tick();
},delta)
return ()=>{clearInterval(ticker)};
},[text]) 

const tick=()=>{
  let i =loopNum %toRotate.length
  let fullText=toRotate[i];
  let updatedText= isDeleting ? fullText.substring(0, text.length-1):fullText.substring(0, text.length +1)
  setText(updatedText)

  if(isDeleting){
    setDelta(prevDelta=> prevDelta/2)
  }
if(!isDeleting && updatedText===fullText){
  setIsDeleting(true);
  setDelta(period);
  
}
else if(isDeleting && updatedText===''){
  setIsDeleting(false);
  setLoopNum(loopNum+1);
setDelta(500)
}

}


  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7} className="">
            <TrackVisibility>
           {({isVisible})=> 
           <div className={isVisible ? "animated__animated animate__fadeIn": "" }>
           <span className="tagline">Welcome to my Portfolio</span>
            <h1>{`Hi I'm Utkarsh srivastava`} <span className="wrap">{text}</span> </h1>
            <p>lorem ipsum dolor sit amet, consectetur</p>
            <button
              className=""
              onClick={() => {
                console.log("connect");
              }}
            >
              <span>Let's Connect <ArrowRightCircle size={25} /> </span>
            </button>
           </div>}
            </TrackVisibility>
          </Col>
          <Col  xs={12} md={6} xl={5} className="">
            <img src={headerImage}  alt="Header Image"/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;

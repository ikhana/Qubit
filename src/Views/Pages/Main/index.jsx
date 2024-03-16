import React from 'react';
import Home from '../../Components/Sections/S1-Home';
import Why from '../../Components/Sections/S2-Why';
import Purple from '../../Components/Sections/S3-Purple';
import Tokenomics from '../../Components/Sections/S4-Tokenomics';
import Numbers from '../../Components/Sections/S5-Numbers';
import Faq from '../../Components/Sections/S6-Faq';
import Summary from '../../Components/Sections/S7-Summary';
import styled from '@emotion/styled';
import Back from "../../../assets/Images/bg.png";
import Loader from '../../Components/Sections/S0-Loader';
import { useState,useEffect} from 'react';
import {motion} from 'framer-motion';
import ElevateExperience from '../../Components/Sections/S3-Elevate';
import earth from "../../../assets/Images/earth2.webp"
import Timeline from '../../Components/Sections/S8-Timeline';



const Styleddiv = styled.div`
    position: relative;
    z-index: 0;
    width:100%;
    overflow: hidden;
    scroll-snap-align:start;
    min-height:100vh;
    
  background-image: url(${earth});
  background-position: top;
  background-size: 100%;
  background-repeat: no-repeat;
  @media(max-width: 900px){
    background-position: center;   
  background-size: auto 210vh;
  }
`
const Backimg = styled.img`
    position: absolute;
    object-fit: cover;
    height: auto;
    width:100%;
    top: 25%;
    right: 0%;
    z-index: -1;
    overflow: hidden;
    @media(max-width:900px){
        width:100%;
    }
    @media(min-width:320px) and (max-width:900px){
    top:25%;
    }
@media(min-width:1600px){
    top: 0%;
}

`



const Motionimg = motion(Backimg)

const Main = () => {
    const [display, setDisplay] = useState(true);
    useEffect(() => {
        setTimeout(()=>{
            setDisplay(false);
        }, 4000);
    
          
        }, []); 
  
    return (
        <>
            <Home />
            <Why/>
            <ElevateExperience/>
            <Timeline/>
            <Styleddiv>
                
            <Tokenomics/>
                {/* <Motionimg initial={{y:"50%"}} whileInView={{y:"0%"}} viewport={{once: true}} transition={{duration: 1}} src={Back} />
                <Numbers/> */}
                <Faq/>
            </Styleddiv>
            <Summary/>
            {/* <End/> */}
        </>
    );
}
 
export default Main;
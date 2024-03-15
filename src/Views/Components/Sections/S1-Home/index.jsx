import React from 'react';
import  { Container, Grid} from '@mui/material';
import MainBg from "../../../../assets/Images/heroBg1.webp";
import styled from '@emotion/styled';
import Regtxt from '../../Regtxt';
import Paragraph from '../../Paragraph';
import PurpleButton from '../../PurpleButton';
import {motion} from 'framer-motion';
import LockerMenu from '../../LockerMenu';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const nvidiaGreen = '#76b900'; 
const darkGrey = '#333333'; 
const lightGrey = '#AAAAAA'; 
const black = '#1A1A1A'; 
const nvidiaGreenAccent = '#F9860B'; 
const MotionGrid = motion(Grid);


const HeaderDesign = styled.div`
  min-height: 100dvh;
  position: relative;
  z-index: 2;
  /* scroll-snap-align:start; */
  background-image: url(${MainBg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  border-image: fill 0 linear-gradient(transparent 60%,#000 95%);
  @media(max-width: 900px){
    min-height: 100vh;
  }
  
`


const Home = () => {
  return (
    <HeaderDesign id="home">
      <LockerMenu /> 
      <Container maxWidth="xl"  sx={{ minHeight:"calc(100vh - 84px)" ,display:"flex", flexDirection:"column", justifyContent:"center", paddingTop:{xs:"15%",md:"2%"}, paddingBottom:{xs:"15%",md:"2%"}}}>
      <Grid container>
          <MotionGrid item initial={{x:"-100%"}} whileInView={{x:"0%"}} viewport={{once: true}} transition={{duration: 1}} md={6} xs={12} display="flex" flexDirection="column" alignItems="flex-start">
          <Paragraph color={nvidiaGreen} sx={{}}>QubitN</Paragraph>
            <Regtxt fs599="33px" my="0px">Play with Qubits in <span style={{fontWeight:"bold",color:"#76b900"}}>QubitN <br /> </span> While Connecting <br /> <span  style={{fontWeight:"bold"}}>Globally </span></Regtxt>
            <Paragraph padding="10px 0" fontWeight="light" sx={{maxWidth:"500px"}}>Explore Shadow Node’s decentralized VPN framework that empower users with secure, private, and uncensored internet access. Safeguard your sensitive data, evade restrictions and ensure online privacy with Shadow Node.</Paragraph>
            <PurpleButton href="/download">Get VPN<ArrowForwardIcon /></PurpleButton>
          </MotionGrid>
        </Grid>
      </Container>
    </HeaderDesign>
  );
}
 
export default Home;
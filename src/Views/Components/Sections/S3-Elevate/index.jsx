import React from 'react';
import styled from '@emotion/styled';
import { Container, Grid } from '@mui/material';
import Maintxt from '../../Maintxt';
import Pic1 from "../../../../assets/Images/Image1.png";
import Paragraph from '../../Paragraph';
import Pic2 from "../../../../assets/Images/Image2.png";
import Cardimg from '../../Cardimg';
import { motion } from 'framer-motion';

const nvidiaGreen = '#76b900'; 
const black = '#1A1A1A';

const Blackbg = styled.div`
  background-color: ${(props) => props.noclr ? "transparent" : black};
  overflow: hidden;
  position: relative;
  z-index: 0;
  min-height: ${(props) => props.noht ? "auto" : "100vh"};
`;

const MotionCont = motion(Container);

const ElevateExperience = () => {
  return (
    <Blackbg id="ElevateExperience">
      <MotionCont maxWidth="lg" initial={{y:"20%"}} whileInView={{y:"0%"}} viewport={{once: true}} transition={{duration: 1}} sx={{display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center", paddingBottom:"100px",paddingTop:{xs:"0px", md:"50px"} }}>
        <Maintxt textAlign="center" my={2} color={nvidiaGreen}>Elevate Your Online Experience</Maintxt>
        <Paragraph color="#fff" sx={{paddingBottom:"20px"}} maxWidth="900px" textAlign="center">Unlock the future of internet privacy with Shadow Node's decentralized VPN, seamless FIAT & Crypto On-Ramps, and rewarding node operations. Watch innovation meet simplicity!</Paragraph>
        <Grid container gap={1} alignItems="start" justifyContent="center">
          <Cardimg xs={12} sm={12} md={5.5} padd="0 26%" psrc={Pic1} bg="transparent" def1="Stay Connected Securely" def2="Embrace a secure online journey with Shadow Node's decentralized VPN, ensuring your connection is fortified against threats. Protect your data and privacy while staying seamlessly connected in a world that values security and freedom." />
          <Cardimg xs={12} sm={12} md={5.5} padd="0 26%" psrc={Pic2} bg="transparent" def1="Optimize Your Connection" def2="Experience a heightened level of connectivity with Shadow Node's advanced technology. Optimize your online experience through our decentralized VPN, ensuring swift and reliable connections. Enjoy the internet at its best with enhanced speed, privacy, and reliability." />
        </Grid>
      </MotionCont>
    </Blackbg>
  );
}

export default ElevateExperience;

import React from 'react';
import styled from '@emotion/styled';
import { Container, Grid } from '@mui/material';
import Maintxt from '../../Maintxt';
import Pic1 from "../../../../assets/Images/FutureProofTech.png";
import Paragraph from '../../Paragraph';
import Pic2 from "../../../../assets/Images/BlockchainV.png";
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
        <Maintxt textAlign="center" my={2} color={nvidiaGreen}>Visionary QubitN</Maintxt>
        <Paragraph color="#fff" sx={{paddingBottom:"20px"}} maxWidth="900px" textAlign="center">Dive into the world of QubitN where future-proof technologies and community-driven innovation forge the path to a decentralized future.</Paragraph>
        <Grid container gap={1} alignItems="start" justifyContent="center">
          <Cardimg xs={12} sm={12} md={5.5} padd="0 26%" psrc={Pic1} bg="transparent" def1="Future-Proof Technologies" def2="Embark on a journey with QubitN as we explore and integrate cutting-edge technologies like quantum computing and next-gen encryption to ensure your digital infrastructure is not just for today, but tomorrow and beyond." />
          <Cardimg xs={12} sm={12} md={5.5} padd="0 26%" psrc={Pic2} bg="transparent" def1="Community-Driven Innovation" def2="At QubitN, innovation is not a solo journey. It’s a collaborative effort that thrives on the diverse ideas and contributions of our global community. Join us to shape the future of decentralized computing, where every voice matters and every idea can spark change." />
        </Grid>
      </MotionCont>
    </Blackbg>
  );
}

export default ElevateExperience ;

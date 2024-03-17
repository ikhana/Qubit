import React from 'react';
import { Container, Grid } from '@mui/material';
import MainBg from "../../../../assets/Images/heroBg5.webp";
import MainBgMobile from "../../../../assets/Images/mobileBg1.jpg"
import styled from '@emotion/styled';
import Regtxt from '../../Regtxt';
import Paragraph from '../../Paragraph';
import PurpleButton from '../../PurpleButton';
import { motion } from 'framer-motion';
import LockerMenu from '../../LockerMenu';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const nvidiaGreen = '#76b900';
const MotionGrid = motion(Grid);

const HeaderDesign = styled.div`
  min-height: 100vh;
  position: relative;
  z-index: 2;
  background-image: url(${MainBg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;

  @media(max-width: 680px){
    background-image: url(${MainBgMobile});
    min-height: 100vh;
    background-size: auto 100vh; 
    background-position: center top; 
  }
`;

const Home = () => {
  return (
    <HeaderDesign id="home">
      <LockerMenu />
      <Container maxWidth="xl" sx={{ minHeight: "calc(100vh - 84px)", display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: { xs: "15%", md: "2%" }, paddingBottom: { xs: "15%", md: "2%" } }}>
        <Grid container>
          <MotionGrid item initial={{ x: "-100%" }} whileInView={{ x: "0%" }} viewport={{ once: true }} transition={{ duration: 1 }} md={6} xs={12} display="flex" flexDirection="column" alignItems="flex-start">
            <Paragraph color={nvidiaGreen}>Welcome to QubitN</Paragraph>
            <Regtxt fs599="33px" my="0px">Empowering the Future <span style={{ fontWeight: "bold", color: "#76b900" }}>of Decentralized Computing<br /></span> with Innovation & Collaboration</Regtxt>
            <Paragraph padding="10px 0" fontWeight="light" sx={{ maxWidth: "500px" }}>Dive into the world of QubitN, where cutting-edge technology meets decentralized innovation. Explore our platform’s blockchain-agnostic orchestration, decentralized data marketplaces, and robust GPU hosting solutions designed to power your projects into the future.</Paragraph>
            <Grid container spacing={2}>
              <Grid item>
                <PurpleButton href="https://re-du.gitbook.io/qubit/">Explore Platform<ArrowForwardIcon /></PurpleButton>
              </Grid>
              <Grid item>
                <PurpleButton href="https://re-du.gitbook.io/qubit/">Learn More</PurpleButton>
              </Grid>
            </Grid>
          </MotionGrid>
        </Grid>
      </Container>
    </HeaderDesign>
  );
}

export default Home;


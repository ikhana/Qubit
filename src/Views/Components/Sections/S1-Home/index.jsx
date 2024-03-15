import React from 'react';
import { Container, Grid } from '@mui/material';
import MainBg from "../../../../assets/Images/heroBg5.webp";
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
  @media(max-width: 900px){
    min-height: 100vh;
  }
`;

const Home = () => {
  return (
    <HeaderDesign id="home">
      <LockerMenu />
      <Container maxWidth="xl" sx={{ minHeight: "calc(100vh - 84px)", display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: { xs: "15%", md: "2%" }, paddingBottom: { xs: "15%", md: "2%" } }}>
        <Grid container>
          <MotionGrid item initial={{ x: "-100%" }} whileInView={{ x: "0%" }} viewport={{ once: true }} transition={{ duration: 1 }} md={6} xs={12} display="flex" flexDirection="column" alignItems="flex-start">
            <Paragraph color={nvidiaGreen}>QubitN</Paragraph>
            <Regtxt fs599="33px" my="0px">Play with Qubits in <span style={{ fontWeight: "bold", color: "#76b900" }}>QubitN <br /> </span> While Connecting <br /> <span style={{ fontWeight: "bold" }}>Globally </span></Regtxt>
            <Paragraph padding="10px 0" fontWeight="light" sx={{ maxWidth: "500px" }}>Explore Shadow Node’s decentralized VPN framework that empower users with secure, private, and uncensored internet access. Safeguard your sensitive data, evade restrictions and ensure online privacy with Shadow Node.</Paragraph>
            <Grid container spacing={2}>
              <Grid item>
                <PurpleButton href="/download">Rent Qubit<ArrowForwardIcon /></PurpleButton>
              </Grid>
              <Grid item>
                <PurpleButton href="/download">White Paper</PurpleButton>
              </Grid>
            </Grid>
          </MotionGrid>
        </Grid>
      </Container>
    </HeaderDesign>
  );
}

export default Home;

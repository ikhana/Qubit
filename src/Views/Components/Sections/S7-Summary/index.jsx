import React from "react";
import { Grid, Link, Container, Typography, Box } from "@mui/material";
import Paragraph from "../../Paragraph";
import MainIcon from "../../../../assets/Images/logo.png"; // Update the logo path
import styled from "@emotion/styled";
import { Blackbg } from "../../../Styles/Maintext.styles";
import PurpleButton from "../../PurpleButton";
import Maintxt from "../../Maintxt";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const nvidiaGreen = '#76b900';
const darkGrey = '#333333';
const lightGrey = '#AAAAAA';

const MainIconImg2 = styled.img`
  width: 40px;
  height: auto;
`;

const WhiteLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Summary = () => {
  const navLinks = [
    { title: "Home", link: "#home" },
    { title: "Features", link: "#features" },
    { title: "Tokenomics", link: "#tokenomics" },
    { title: "Platform", link: "#platform" }, // Updated from "Pricing" to "Platform"
    { title: "Roadmap", link: "#roadmap" },
  ];

  return (
    <Box bgcolor={darkGrey} padding="20px 0">
      <Blackbg noht noclr>
        <Container
          maxWidth="xl"
          sx={{ paddingTop: "50px", paddingBottom: "50px"}}
        >
          <Grid container display="flex" flexDirection={{xs : "column", lg:"row"}} justifyContent="space-between" alignItems={{xs:'start'}}>
            <Grid
              item
              md={6}
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap:"10px",
                alignItems: {
                  xs: "start",
                  md: "start",
                  marginTop: { xs: "20px", md: "0px" },
                },
              }}
            >
              <Link
                href="/"
                underline="none"
                color="inherit"
                display="flex"
                alignItems={{xs:'start',md:'center'}}
                gap={1}
              >
                <MainIconImg2 src={MainIcon} alt="QubitN Logo" />
                <Typography variant="h6" color="white" fontFamily="OpenSans">
                  QubitN
                </Typography>
              </Link>
              <Paragraph
                color={lightGrey}
                variant="caption"
                maxWidth="250px"
                sx={{
                  textAlign: { xs: "start", md: "start" },
                }}
              >
                Explore QubitN’s innovative platform for decentralized computing, blockchain-agnostic orchestration, and secure data marketplaces.
              </Paragraph>
              <Paragraph
                color={lightGrey}
                variant="body2" 
                maxWidth="250px"
                sx={{
                  textAlign: { xs:"start", md: "start" },
                }}
              >
                Email: info@qubitn.org
              </Paragraph>
              <PurpleButton href="/platform">Explore Platform<ArrowForwardIcon /></PurpleButton>
            </Grid>
            <Grid
              item
              md={2}
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap:"5px",
                alignItems: {
                  xs: "start",
                  md: "start",
                  marginTop: { xs: "20px", md: "0px" },
                },
              }}
            >
              <Maintxt variant="h6" color={nvidiaGreen}>Quick Links</Maintxt>
              {navLinks.map((item) => (
                <Link
                  href={item.link}
                  underline="none"
                  color="inherit"
                  key={item.title}
                >
                  <Paragraph fontFamily="OpenSans" marginTop="0px" marginBottom="0px">
                    {item.title}
                  </Paragraph>
                </Link>
              ))}
            </Grid>
            <Grid
              container
              item
              md={2}
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "start", md: "start" },
                marginTop: { xs: "20px", md: "0px" },
              }}
            >
              <Grid item>
                <Maintxt variant="h6" color={nvidiaGreen}>Follow Us</Maintxt>  
              </Grid>
              <Grid item display="flex" flexDirection="column" gap="5px">
                {/* Update social links accordingly */}
                <WhiteLink href="https://x.com/qubitnio" target="blank">
                  <Paragraph fontFamily="OpenSans" my="0px">
                    Twitter
                  </Paragraph>
                </WhiteLink>
                <WhiteLink href="https://t.me/qubitN_io" target="blank">
                  <Paragraph fontFamily="OpenSans" my="0px">
                    Telegram
                  </Paragraph>
                </WhiteLink>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Blackbg>
    </Box>
  );
};

export default Summary;

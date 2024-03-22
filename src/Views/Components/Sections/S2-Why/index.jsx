import React from 'react';
import styled from '@emotion/styled';
import { Container, Grid } from '@mui/material';
import Maintxt from '../../Maintxt';
import Pic1 from "../../../../assets/Images/blockchain.jpg";
import Paragraph from '../../Paragraph';
import Pic2 from "../../../../assets/Images/IOT2.jpg";
import Pic3 from "../../../../assets/Images/markeplace.jpg";
import Pic4 from "../../../../assets/Images/GPU.jpg";
import Pic5 from "../../../../assets/Images/AIMl.jpg";
import Pic6 from "../../../../assets/Images/community2.jpg";
import aboutBG from "../../../../assets/Images/aboutBG.jpg";
import Cardimg from '../../Cardimg';
import { motion } from 'framer-motion';
import particlesJS from 'particles.js';

import "./index.css"


const nvidiaGreen = '#76b900'; 
const black = '#1A1A1A'; 

const Blackbg = styled(Container)`
    background-color: ${black};
    overflow: hidden;
    position: relative;
    z-index: 0;
    min-height:  ${(props) => props.noht ? "auto" : "100vh"};
    display: flex;
    align-items: center;
    ::before {
        content: "";
        position: absolute;
        top: 25%;
        left: 50%;
        transform: translate(-50%,-25%);
        width: 100%;
        height: 0px;
        background-image: url(${aboutBG});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 10px;
        z-index: 0;
    }
`;

const MotionCont = motion(Container);

const Why = () => {
    return (
        <Blackbg maxWidth="xl" id="features">
            <MotionCont maxWidth="lg" initial={{y:"20%"}} whileInView={{y:"0%"}} viewport={{once: true}} transition={{duration: 1}} sx={{display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center", paddingBottom:"100px",paddingTop:{xs:"0px", md:"50px"} }}>
                <Paragraph color={nvidiaGreen} sx={{paddingTop:"20px"}}>Features</Paragraph>
                <Maintxt textAlign="center" mt={2} mb={5} color={nvidiaGreen}>Why Choose QubitN</Maintxt>
                <Grid container gap={3} alignItems="start" justifyContent="center">
                    <Cardimg className="feature-card" psrc={Pic1} def1="Unified Blockchain Fabric" def2="QubitN's Blockchain-Agnostic Orchestration creates a seamless environment for diverse blockchain interactions, empowering developers to build and manage dApps with cross-chain capabilities." />
                    <Cardimg className="feature-card" psrc={Pic2} def1="Edge Computing Evolution" def2="Leverage the power of decentralized edge computing to process data where it's generated, ensuring real-time responses and enhanced privacy for all your IoT devices." />
                    <Cardimg className="feature-card" psrc={Pic3} def1="Data Marketplaces Empowered" def2="Participate in QubitN's decentralized data marketplaces, where you can securely monetize your data, retain control, and contribute to a fair and ethical digital economy." />
                    <Cardimg className="feature-card" psrc={Pic4} def1="GPU Power on Demand" def2="Access high-performance GPU resources tailored for a variety of computational tasks. Enjoy the flexibility and scalability of QubitN's decentralized GPU hosting." />
                    <Cardimg className="feature-card" psrc={Pic5} def1="Intelligent Automation" def2="Harness the capabilities of AI and ML to automate and enhance the functionality of smart contracts, optimize resource allocation, and pioneer proactive data privacy measures." />
                    <Cardimg className="feature-card" psrc={Pic6} def1="Community and Growth" def2="Join a thriving community that supports growth and collaboration. Benefit from comprehensive resources, multi-channel support, and a platform that evolves with its users." />
                </Grid>
            </MotionCont>
        </Blackbg>
    );
}

export default Why;

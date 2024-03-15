import React from 'react';
//import Marquee from "react-fast-marquee";
import styled from '@emotion/styled';
import { Container, Grid } from '@mui/material';
import Maintxt from '../../Maintxt';
import Pic1 from "../../../../assets/Images/pic1.png";
import Paragraph from '../../Paragraph';
import Pic2 from "../../../../assets/Images/pic2.png";
import Pic3 from "../../../../assets/Images/pic3.png";
import aboutBG from "../../../../assets/Images/aboutBG.jpg";
import Cardimg from '../../Cardimg';
import {motion} from 'framer-motion';
const Blackbg = styled(Container)`
    background-color: ${(props) => props.noclr ? "transparent" : "#000"};
    overflow: hidden;
    position:relative;
    z-index: 0;
    min-height:  ${(props) => props.noht ? "auto" : "100vh"} ;
    display: flex;
    align-items: center;
    /* scroll-snap-align:start; */
    ::before{
        content: "";
        position: absolute;
        top: 25%;
        left: 50%;
        transform: translate(-50%,-25%);
        width: 100%;
        height: 570px;
        background-image: url(${aboutBG});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 10px;
        z-index: 0;
    }`
const MotionCont = motion(Container)
const Why = () => {
    return (
        <Blackbg maxWidth="xl" id="features" >
            {/* <Motionimg initial={{x:"-100%"}} whileInView={{x:"0%"}} viewport={{once: true}} transition={{duration: 1}} src={Purplebg} alt="purple pic" /> */}
            <MotionCont  maxWidth="lg" initial={{y:"20%"}} whileInView={{y:"0%"}} viewport={{once: true}} transition={{duration: 1}} sx={{display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center", paddingBottom:"100px",paddingTop:{xs:"0px", md:"50px"} }}>
            <Paragraph color="#835DFF" sx={{paddingTop:"20px"}}>Features</Paragraph>
                <Maintxt textAlign="center" mt={2} mb={5}>Why Use Shadow Node</Maintxt>
                <Grid container gap={3} alignItems="start" justifyContent="center">
                    <Cardimg  psrc={Pic1} def1="Decentralized VPN" def2="Experience a new era of online privacy with our Decentralized VPN (dVPN). Unlike traditional VPNs, our dVPN leverages blockchain for a secure, private, and uncensored internet. Enjoy enhanced security with provable encryption, distributed exit nodes, and a relay network for internet freedom." />
                    <Cardimg psrc={Pic2} def1="FIAT & Crypto On-Ramps" def2="Bridge traditional finance and the crypto world effortlessly with our FIAT & Crypto On-Ramps. Seamlessly convert between fiat and cryptocurrencies for a user-friendly experience. Whether you're new or seasoned, our on-ramps simplify engagement with the blockchain ecosystem on your terms." />
                    <Cardimg  psrc={Pic3}  def1="Run A Node And Get Rewards" def2="Be a vital part of our network by running a node and earning rewards. Running a node on Shadow Node not only contributes to the decentralized infrastructure but also earns SHADE tokens. " />
                    {/* <Cardimg psrc={Pic4} def1="Seamless Payments" def2="MobETH streamlines your experience with effortless funding options. Replenish your account seamlessly using a variety of payment methods, including e-wallets, bank cards, or cryptocurrencies. Enjoy the convenience of managing your payments with simplicity and ease." /> */}
                </Grid>
            </MotionCont>
        </Blackbg>
           
    );
}
 
export default Why;
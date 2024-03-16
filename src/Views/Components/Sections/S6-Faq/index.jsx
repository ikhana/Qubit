import React from 'react';
import { Blackbg } from '../../../Styles/Maintext.styles';
import { Container } from '@mui/material';
import AccordianDesign from '../../AccordianDesign';
import Maintxt from '../../Maintxt';
import { motion } from 'framer-motion';

const Motioncont = motion(Container)

const Faq = () => {
    return (
            <Blackbg noht noclr id="faq">
                <Motioncont  initial={{y:"20%"}} whileInView={{y:"0%"}} viewport={{once: true}} transition={{duration: 1}} sx={{paddingTop:"50px", paddingBottom:"150px"}}>
                    <Maintxt fontWeight="bold" textAlign="center">FAQ</Maintxt>
                    <AccordianDesign def1="How Does QubitN Facilitate Decentralized Computing?" def2="QubitN leverages blockchain-agnostic orchestration, decentralized edge computing, and AI integration to offer a robust platform for decentralized computing. This enables seamless, secure, and efficient processing across various blockchain networks, empowering developers and users with unprecedented computing capabilities."></AccordianDesign>
                    <AccordianDesign def1="What Makes QubitN's Tokenomics Unique?" def2="QubitN's tokenomics are designed for long-term sustainability and growth, with a dynamic supply model that supports the ecosystem's development, rewards the community, and facilitates seamless service transactions. Our tokens play a crucial role in governance, staking, and accessing premium features."></AccordianDesign>
                    <AccordianDesign def1="How Can I Contribute to QubitN and Earn Rewards?" def2="Contributing to QubitN can be done by participating in the ecosystem through running nodes, developing applications, or contributing to the community and governance. Rewards are distributed in QBN tokens, fostering a collaborative environment where everyone has the opportunity to shape the platform's future and share in its success."></AccordianDesign>
                </Motioncont>
            </Blackbg>
    );
}
 
export default Faq;

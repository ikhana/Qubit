import { Container, Grid } from '@mui/material';
import React from 'react';
import Paragraph from '../../Paragraph';
import { Blackbg, Purplediv } from '../../../Styles/Maintext.styles';
import Regtxt from '../../Regtxt';
import { motion } from 'framer-motion';
import PricingCards from '../../PricingCard';

const nvidiaGreen = '#76b900';
const darkGrey = '#333333';

const MotionPurplediv = motion(Purplediv);

const Purple = () => {
    return (
        <Blackbg noht id="pricing">
            <Container maxWidth="xl" sx={{padding:"0 !important"}}>
                <MotionPurplediv style={{display:"flex", flexDirection:"column", alignItems:"center"}} initial={{y:"20%"}} whileInView={{y:"0%"}} viewport={{once: true}} transition={{duration: 1}}>
                    <Regtxt textAlign="center" my="0px" color={nvidiaGreen}>Pricing</Regtxt>
                    <Paragraph color="#fff" m="10px 0 30px" maxWidth="900px" textAlign="center">
                        Shadow Node believes in transparency and simplicity. Our pricing plans are designed to cater to your specific needs, providing flexibility and value for every user.
                    </Paragraph>
                    <Grid container display={"flex"} justifyContent={"space-between"} gap="20px 0">
                        <Grid item xs={12} md={5.9} bgcolor="#fff" padding="100px 30px" borderRadius="10px">
                            <Paragraph variant="h5" paddingBottom="20px" color={nvidiaGreen} textAlign="left">In 3 Steps You Have</Paragraph>
                            <Paragraph color="#000" variant="h6" maxWidth="400px" textAlign="left">
                                - Decentralized Service <br /><br />
                                - Purchase And Usage, Protected From <br />
                                &nbsp; De-Anonymization<br /><br />
                                - Quantum-Resistant Encryption
                            </Paragraph>
                        </Grid>
                        <Grid item xs={12} md={5.9} display="flex" sx={{flexDirection:{xs:'column',sm:'row'}}} gap="20px">
                            <PricingCards btnbg="#000000 !important" btnborder={`1px solid ${darkGrey} !important`} pkgType="Introductory" pkgAmopunt="$5" pkgDuration="1 Month" />
                            <PricingCards maxWidth="calc(100% - 4px)" pkgType="Popular" pkgAmopunt="$55" pkgDuration="12 Month" sx={{background:`linear-gradient(to bottom,#FFFFFF, ${darkGrey})`}} c="#000" b={`2px solid ${nvidiaGreen}`}/>
                        </Grid>
                    </Grid>
                </MotionPurplediv>
            </Container> 
        </Blackbg>
    );
}

export default Purple;

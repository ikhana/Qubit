import { Box, Typography } from '@mui/material';
import React from 'react';
import Paragraph from '../Paragraph';
import PurpleButton from '../PurpleButton';

const nvidiaGreen = '#76b900';
const darkGrey = '#333333';

const PricingCards = (props) => {
  return (
    <Box borderRadius="10px" display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={""} sx={{background: darkGrey}} width="100%" border={props.b} {...props}>
        <Box display="flex" flexDirection="column" alignItems="start" padding={"30px 20px"}>
            <Paragraph variant="h6" paddingBottom="20px" color={nvidiaGreen} textAlign="left">{props.pkgType}</Paragraph>
            <Paragraph variant="h5" paddingBottom="20px" fontWeight="500" color={props.c ? props.c : "#fff"} textAlign="left">{props.pkgDuration}</Paragraph>
        </Box>
        <Paragraph variant="h3" fontWeight="500" color={"#fff"} padding="20px" textAlign="left">{props.pkgAmount}<Typography variant='body1' component={"span"}>/mo</Typography></Paragraph>
        <PurpleButton href="https://app.shadownode.org/" sx={{background: `linear-gradient(to right, ${nvidiaGreen}, ${darkGrey})`, border: `1px solid ${nvidiaGreen}`, margin: "10px 0px 30px"}}>
            Buy Now
        </PurpleButton>
    </Box>
  )
}

export default PricingCards;

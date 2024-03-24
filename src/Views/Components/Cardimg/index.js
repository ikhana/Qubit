import React from 'react';
import { Grid, Box } from '@mui/material';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Mediumtxt from '../Mediumtxt';
import Paragraph from '../Paragraph';
import  './index.css';
const nvidiaGreen = '#76b900';

// Styling for the image to ensure rounded corners at the top
const StyledImg = styled.img`
  width: 100%;
  border-radius: 10px 20px 0 0; 
  object-fit: cover; 
`;

const MotionGrid = motion(Grid);

const Cardimg = (props) => {
  return (
    <MotionGrid 
      item 
      xs={12} sm={4.5} md={3.5} 
      display="flex"  
      flexDirection="column" 
      position="relative" 
      borderRadius="10px" 
      bgcolor={props.bg ? props.bg : "#161616"} 
      minHeight="450px" 
      paddingBottom="10px"
      whileHover={{ scale: 1.05 }} // Smooth scaling effect on hover
      transition={{ duration: 0.3 }} // Transition duration for the hover effect
      {...props}
    >
      <StyledImg src={props.psrc} alt="pic"/>
      <Box display="flex" flexDirection="column" padding={props.padd ? props.padd : "20px"}>
        <Mediumtxt  color={nvidiaGreen}> <span className="title-glow-effect">{props.def1}</span></Mediumtxt>
        <Paragraph my="0px">{props.def2}</Paragraph>   
      </Box>
    </MotionGrid>
  );
}

export default Cardimg;

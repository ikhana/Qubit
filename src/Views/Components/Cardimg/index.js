import { Box, Grid } from '@mui/material';
import React from 'react';
import { Img } from '../../Styles/Maintext.styles';
import Mediumtxt from '../Mediumtxt';
import Paragraph from '../Paragraph';

const nvidiaGreen = '#76b900';
const darkGrey = '#333333';

const Cardimg = (props) => {
  return (
    <Grid
      item
      xs={12}
      sm={4.5}
      md={3.5}
      display="flex"
      sx={{ paddingTop: { xs: "0px", md: props.ptop } }}
      flexDirection="column"
      position="relative"
      borderRadius="10px"
      bgcolor={props.bg ? props.bg : darkGrey} // Updated to use darkGrey from your theme
      minHeight="500px"
      paddingBottom="10px"
      {...props}
    >
      <Img src={props.psrc} alt="pic" paddingLeft="" />
      <Box
        display="flex"
        flexDirection="column"
        padding={props.padd ? props.padd : "20px"}
      >
        <Mediumtxt color={nvidiaGreen}>{props.def1}</Mediumtxt>
        <Paragraph my="0px">{props.def2}</Paragraph>
      </Box>
    </Grid>
  );
};

export default Cardimg;

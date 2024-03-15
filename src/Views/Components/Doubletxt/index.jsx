import { Grid } from '@mui/material';
import React from 'react';
import Maintxt from '../Maintxt';
import Paragraph from '../Paragraph';

const nvidiaGreen = '#76b900';

const Doubletxt = (props) => {
    return (
        <Grid item md={2} xs={6} display="flex" flexDirection="column">
            <Maintxt variant="h5" mb="10px">{props.def1}</Maintxt>
            <Paragraph color={nvidiaGreen} fontFamily="OpenSans" my="0px">{props.def2}</Paragraph>
        </Grid>
      );
}
 
export default Doubletxt;

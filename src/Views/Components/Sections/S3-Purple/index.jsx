import React from 'react';
import { Container, Grid } from '@mui/material';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Paragraph from '../../Paragraph';
import { Blackbg } from '../../../Styles/Maintext.styles';
import Regtxt from '../../Regtxt';
import { motion } from 'framer-motion';
import './TokenEconomics.css'; // Ensure you have the corresponding CSS file

ChartJS.register(ArcElement, Tooltip, Legend);

const nvidiaGreen = '#76b900';
const darkGrey = '#333333';

const data = {
  labels: ['LP', 'CEX Listing', 'Marketing & Partnership', 'Team Tokens', 'Ecosystem Funds/Rewards'],
  datasets: [
    {
      label: 'Token Distribution',
      data: [75, 5, 6, 4, 10], // Adjusted percentages to your tokenomics
      backgroundColor: [
        nvidiaGreen,
        darkGrey,
        '#F9860B', // nvidiaGreenAccent, assuming this is the accent color
        '#AAAAAA', // lightGrey
        '#1A1A1A' // black
      ],
      borderColor: [
        nvidiaGreen,
        darkGrey,
        '#F9860B',
        '#AAAAAA',
        '#1A1A1A'
      ],
      borderWidth: 1,
      hoverOffset: 4
    }
  ]
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'QubitN Tokenomics',
      color: 'white',
      font: {
        size: 24
      }
    }
  }
};

const TokenEconomicsChart = () => {
    return (
        <Blackbg noht id="tokenomics">
            <Container maxWidth="xl" sx={{padding:"0 !important"}}>
                <motion.div initial={{y:"20%"}} whileInView={{y:"0%"}} viewport={{once: true}} transition={{duration: 1}} style={{display:"flex", flexDirection:"column", alignItems:"center", paddingTop: "50px", paddingBottom: "50px"}}>
                    <Regtxt textAlign="center" my="0px" color={nvidiaGreen}>Tokenomics</Regtxt>
                    <Paragraph color="#fff" m="10px 0 30px" maxWidth="900px" textAlign="center">
                        QubitN tokenomics are designed for sustainability and growth, with a total supply of 1B tokens distributed across various segments to support the ecosystem.
                    </Paragraph>
                    <Grid container display={"flex"} justifyContent={"space-between"} gap="20px 0">
                        <Grid item xs={12} md={5.9} display="flex" justifyContent="center" alignItems="center">
                            <Pie data={data} options={options} />
                        </Grid>
                        <Grid item xs={12} md={5.9} display="flex" flexDirection="column" alignItems="start" gap="20px">
                            {/* Add more tokenomics details as necessary */}
                            <Paragraph color="#fff" variant="body1">
                                - LP 75%: Lock for a year & will be extended
                            </Paragraph>
                            <Paragraph color="#fff" variant="body1">
                                - CEX Listing 5%: Lock for 2 months
                            </Paragraph>
                            <Paragraph color="#fff" variant="body1">
                                - Marketing & Partnership 6%: 1.5% unlock every month
                            </Paragraph>
                            <Paragraph color="#fff" variant="body1">
                                - Team Tokens 4%: Lock for a year at first then we burn for hype
                            </Paragraph>
                            <Paragraph color="#fff" variant="body1">
                                - Ecosystem Funds/Rewards 10%: Lock for a yr
                            </Paragraph>
                        </Grid>
                    </Grid>
                </motion.div>
            </Container> 
        </Blackbg>
    );
}

export default TokenEconomicsChart;

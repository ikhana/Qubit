import React from 'react';
import { Container, Grid, Link } from '@mui/material';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Paragraph from '../../Paragraph';
import { Blackbg } from '../../../Styles/Maintext.styles';
import Maintxt from '../../Maintxt';
import TwitterIcon from "../../../../assets/Images/Twitter.png";
import SendIcon from "../../../../assets/Images/Send.png";
import BarIcon from "../../../../assets/Images/baricon1.png";
import RecIcon from "../../../../assets/Images/recticon.png";
import UniIcon from "../../../../assets/Images/unicorn.png";
import {Typography} from '@mui/material';
import { StyledButtonLink, StyledList3 } from "../../../Styles/Navbar.styles";
import { motion } from "framer-motion";
import './TokenEconomicsChart.css'; // Assuming you have this CSS for styling
const MotionCont = motion(Container);
ChartJS.register(ArcElement, Tooltip, Legend);

// Define theme colors
const nvidiaGreen = '#76b900';
const darkGrey = '#333333';
const lightGrey = '#AAAAAA';
const black = '#1A1A1A';

// Tokenomics dataset
const data = {
  labels: ['LP', 'CEX Listing', 'Marketing & Partnership', 'Team Tokens', 'Ecosystem Funds/Rewards'],
  datasets: [{
    label: 'Token Distribution',
    data: [75, 5, 6, 4, 10],
    backgroundColor: [
      nvidiaGreen,
      '#F9860B', // Assuming nvidiaGreenAccent
      lightGrey,
      darkGrey,
      'white'
    ],
    borderColor: 'rgba(255, 255, 255, 0.25)',
    borderWidth: 1,
    hoverOffset: 4
  }]
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        color: 'white',
        font: {
          size: 14
        }
      }
    },
    title: {
      display: false
    }
  },
  maintainAspectRatio: false
};


const updatedOptions = {
  ...options,
  plugins: {
    ...options.plugins,
    legend: {
      ...options.plugins.legend,
      labels: {
        ...options.plugins.legend.labels,
        color: 'white', // Enhances readability
        padding: 20, // Adds spacing for a cleaner look
      }
    },
    tooltip: {
      // Customizing tooltip for better visuals
      callbacks: {
        label: function(context) {
          let label = context.label || '';
          if (label) {
            label += ': ';
          }
          if (context.parsed !== null) {
            label += `${context.parsed}%`;
          }
          return label;
        }
      },
      backgroundColor: '#333333',
      titleColor: nvidiaGreen,
      bodyColor: 'white',
      titleFont: { size: 16 },
      bodyFont: { size: 14 },
      borderColor: nvidiaGreen,
      borderWidth: 1
    }
  },
  cutout: '70%', // Making a doughnut chart for a more modern look
};

// Placeholder for social media links, ensure these are updated with actual links
const socialMediaLinks = [
  { icon: <img src={BarIcon} alt="Bar Icon" style={{ width: 24, height: 24 }} />, link: "#" },
  { icon: <img src={RecIcon} alt="Rec Icon" style={{ width: 24, height: 24 }} />, link: "#" },
  { icon: <img src={UniIcon} alt="Uni Icon" style={{ width: 30, height: 30 }} />, link: "#" },
  { icon: <img src={SendIcon} alt="Send Icon" style={{ width: 24, height: 24 }} />, link: "https://t.me/qubitN_io" },
  { icon: <img src={TwitterIcon} alt="Twitter Icon" style={{ width: 24, height: 24 }} />, link: "https://x.com/qubitnio" },
];


const TokenEconomicsChartMerged = () => {
  return (
    <Blackbg noclr id="tokenomics" style={{ padding: "10px" }}>
    <Container maxWidth="xl" sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingBottom: "100px", paddingTop: { xs: "50px", md: "100px" }, background: "rgba(6,6,6,.84)", border: `1px solid ${nvidiaGreen}`, borderRadius: "10px" }}>
      <Typography variant="h4" color={nvidiaGreen} gutterBottom sx={{ marginBottom: "30px" }}>QubitN Tokenomics</Typography>
      <Paragraph color="white" sx={{ textAlign: "center", marginBottom: "20px" }}>
        Dive into the economics of QubitN — designed for sustainability and growth with a total supply of 1B tokens. Our approach ensures long-term value for participants and supports the ecosystem's expansive future.
      </Paragraph>
      {/* Introducing key tokenomics information */}
      <Grid container spacing={2} justifyContent="center" sx={{ marginBottom: '20px' }}>
        <Grid item xs={12} sm={4}>
          <Typography variant="body1" color="white" sx={{ textAlign: "center" }}>Name: QubitN</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="body1" color="white" sx={{ textAlign: "center" }}>Symbol: $QBN</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="body1" color="white" sx={{ textAlign: "center" }}>Total Supply: 1,000,000,000</Typography>
        </Grid>
      </Grid>
      {/* Chart Container for Improved Visualization */}
      <div className="chart-container" style={{ width: '100%', maxWidth: '500px', height: 'auto', position: 'relative', margin: '0 auto' }}>
        <Pie data={data} options={updatedOptions} />
      </div>
          <Grid item xs={12} md={6}>
            <div className="token-distribution-container">
              {data.labels.map((label, index) => (
                <div key={index} className="token-distribution-box">
                  <Typography className="token-distribution-title">{label}</Typography>
                  <Typography className="token-distribution-value">{`${data.datasets[0].data[index]}%`}</Typography>
                </div>
              ))}
            </div>
          </Grid>
        
        <div className="social-links-container">
          {socialMediaLinks.map((link, index) => (
            <Link key={index} href={link.link} target="_blank" className="social-link">
              {/* Assuming you replace <img> tags with <Icon> components for SVG icons */}
              {link.icon}
            </Link>
          ))}
        </div>
      </Container>
    </Blackbg>
  );
}


export default TokenEconomicsChartMerged;


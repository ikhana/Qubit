import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import styled from '@emotion/styled';
import { Button, List } from '@mui/material';

const nvidiaGreen = '#76b900'; // Nvidia-like green
const darkGrey = '#333333'; // Dark grey for backgrounds
const lightGrey = '#AAAAAA'; // Light grey for text

export const StyledAppBar = styled(AppBar)`
  box-shadow: none;
  padding-left: 0px !important;
  padding-right: 0px !important;
  background-color: transparent;
  backdrop-filter: blur(5px);
  z-index: 2;
`;

export const StyledToolbar = styled(Toolbar)`
  justify-content: space-around;
  padding-left: 0px !important;
  padding-right: 0px !important;
  align-items: center;
  & > .MuiButtonBase-root {
    color: ${lightGrey};
  }
`;

export const StyledTextOne = styled(Typography)`
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  color: ${lightGrey}; // This was previously black, changed to light grey to fit the new theme
  text-decoration: none;  
  filter: drop-shadow(1px 0px 0.5px rgba(0,0,0,0.42));
`;

export const StyledTextTwo = styled(Typography)`
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: ${nvidiaGreen}; // Assuming you want to highlight this text with Nvidia green
  text-decoration: none;
  filter: drop-shadow(1px 0px 0.5px rgba(0,0,0,0.42));
`;


export const StyledMenuDesign = styled(Menu)`
`

export const StyledList = styled(List)`
  a:nth-last-child(2) {
    & > .MuiButtonBase-root {
      margin-left: 15px;
      background: ${nvidiaGreen}; // Changed to Nvidia green for consistency
      border-radius: 5px; 
      padding: 8px;
    }
  }
  a:nth-last-child(1) {
    & > .MuiButtonBase-root {
      margin-left: 15px;
      background: ${nvidiaGreen}; // Changed to Nvidia green for consistency
      border-radius: 5px; 
      padding: 8px;
    }
  }
`;
export const StyledList3 = styled(List)`
  a {
    & > .MuiButtonBase-root {
      margin-left: 15px;
      background: ${nvidiaGreen}; // Changed to Nvidia green for consistency
      border-radius: 5px; 
      padding: 8px;
    }
  }
  & a {
    & > .MuiButtonBase-root {
      margin-left: 15px;
      background: ${nvidiaGreen}; // Changed to Nvidia green for consistency
      border-radius: 5px; 
      padding: 8px;
    }
  }
  a:nth-last-child(3) {
    & > .MuiButtonBase-root {
      margin-left: 15px;
      background: ${nvidiaGreen}; // Changed to Nvidia green for consistency
      border-radius: 5px; 
      padding: 5px;
    }
  }
  a:nth-last-child(4) {
    & > .MuiButtonBase-root {
      margin-left: 15px;
      background: ${nvidiaGreen}; // Changed to Nvidia green for consistency
      border-radius: 5px; 
      padding: 8px;
    }
  }
  a:nth-last-child(5) {
    & > .MuiButtonBase-root {
      margin-left: 15px;
      background: ${nvidiaGreen}; // Changed to Nvidia green for consistency
      border-radius: 5px; 
      padding: 8px;
    }
  }
`;

export const StyledButtonLink = styled(Button)`
  margin-top: 14px;
  margin-bottom: 14px;
  font-size: 14px;
  font-family: OpenSans;
  color: ${lightGrey}; // Changed to light grey for consistency
  text-transform: capitalize;
  display: block;
  border-radius: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 0px;
  height: auto;
  padding: 1px 16px;
  &:hover {
    color: ${darkGrey}; // Dark grey on hover for contrast
    background-color: transparent;
  }
  ::after {
    content: '';
    width: 0%;
    height: 2px;
    background: ${nvidiaGreen}; // Nvidia green for the underline effect
    display: block;
    margin: auto;
    transition: 0.5s;
  }
  &:hover::after {
    width: 100%; // Full underline on hover
  }
`;

export const StyledButtonLink2 = styled(Button)`
  margin-top: 16px;
  margin-bottom: 16px;
  font-size: ${(props) => props.smldesgn ? "16px" : "40px"};
  height: 43px;
  line-height: 0;
  font-weight: ${(props) => props.smldesgn ? "normal" : "bold"};
  font-family: serif;
  border: 1px solid ${lightGrey}; // Light grey border for visibility
  border-radius: 5px;
  color: ${(props) => props.clr === "black" ? darkGrey : lightGrey}; // Using dark grey instead of black
  text-transform: capitalize;
  display: block;
  background-color: ${(props) => props.btnclr ? props.btnclr : "transparent"}; 
  align-items: center;
  min-width: ${(props) => props.smldesgn ? "200px" : "45px"};
  &:hover {
    color: ${lightGrey}; // Light grey on hover for visibility
    background-color: ${nvidiaGreen}; // Nvidia green on hover
  }
`;

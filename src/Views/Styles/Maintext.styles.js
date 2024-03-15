import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import { Accordion, Container, Card, Grid } from '@mui/material';

const nvidiaGreen = '#76b900'; 
const darkGrey = '#333333'; 
const lightGrey = '#AAAAAA'; 
const black = '#1A1A1A'; 
const nvidiaGreenAccent = '#F9860B'; 

export const Blackbg = styled.div`
  background-color: ${(props) => props.noclr ? "transparent" : black};
  overflow: hidden;
  position: relative;
  z-index: 1;
  min-height:  ${(props) => props.noht ? "auto" : "100vh"};
  /* scroll-snap-align: start; */
`;

export const StyledContainer = styled(Container)`
    background-color: ${(props) => props.bgclr ? props.bgclr : black};
    min-height: ${(props) => props.mht ? props.mht : "auto"};
    position: relative;
    padding: 0px !important;
    margin-top: ${(props) => props.my ? "100px" : "auto"};
    margin-bottom: "100px"; 
`;

export const StyledTypographyText = styled(Typography)`
    font-family: MickirItalicBlack;
    font-size: ${(props) => props.fntsze ? props.fntsze : "62px"};
    line-height: ${(props) => props.lh ? props.lh : "1.3"};
    font-weight: bold;
    text-align: ${(props) => props.ta ? props.ta : "left"};
    color: ${(props) => props.txtclr ? props.txtclr : lightGrey};  
    font-style: italic;
    @media (max-width: 760px) {
        font-size: 32px;
        line-height: 1;
    }
`;

export const StyledAccordian = styled(Accordion)`
    background: ${darkGrey};
    margin-top: 30px;
    border-radius: 10px !important;
    box-shadow: none;
    & .MuiButtonBase-root {
        border-radius: 10px !important;
        background: ${darkGrey};
        & > .MuiAccordionSummary-content {
            & > .MuiTypography-root {
                color: nvidiaGreen; // Replace with the variable for your accent color   
            }
        }
        & > .MuiAccordionSummary-expandIconWrapper {
            & > .MuiSvgIcon-root {
                color: lightGrey;
            }
        }
    }
    & > .MuiCollapse-root {
        & > .MuiCollapse-wrapper {
            & > .MuiCollapse-wrapperInner {
                & > .MuiAccordion-region {
                    & > .MuiAccordionDetails-root {
                        & > .MuiTypography-root {
                            color: lightGrey;
                        }
                    }
                }
            }
        }
    }
`;

export const MidsectionBlack = styled.div`
    min-height: 15vh;
    background: linear-gradient(180deg, ${darkGrey} 0.00%, ${black} 100.00%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    margin-top: 50px;
    margin-bottom: 50px;
    padding: 20px 0px;
`;


export const BlackBox = styled.div`
    background-color: ${black};
    border-radius: 5px;
    width: 122px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
    color: ${nvidiaGreenAccent}; // Nvidia accent color for the text inside the box
`;

export const OrangeText = styled(Typography)`
    font-size: ${(props) => props.fntsze ? props.fntsze : "20px"};
    font-family: "Mickir";
    color: ${nvidiaGreenAccent}; // Nvidia accent color
    font-weight: bold;
    text-align: left;
`;

export const HoverCard = styled(Card)`
    /* @media(max-width:768px ){ 
        margin-top: 50px;
    }*/
`

export const HoverGrid = styled(Grid)`
  border-radius: 5px;
  position: relative;

  &:hover {
    background-color: ${nvidiaGreenAccent}; // Nvidia green for hover background

    .dogleft {
      left: -60px;
    }
    .dogtop {
      top: -71px !important;
    }
    .dogright {
      right: -60px !important;
    }

    & > .MuiPaper-root {
      background-color: ${nvidiaGreenAccent}; // Nvidia green for the Paper component on hover

      & > .MuiTypography-root {
        color: ${black}; // Black text inside Paper component on hover
      }
      & > .hovertext {
        color: ${nvidiaGreenAccent}; // Nvidia green text, likely needs to be visible against the hover background
      }
    }
  }

  @media (max-width: 768px) {
    margin-top: 50px;

    &:hover {
      .dogleft {
        top: -71px !important;
      }
      .dogtop {
        top: -71px !important;
      }
      .dogright {
        top: -71px !important;
      }
    }
  }
`;

export const Purplediv = styled.div`
    background: ${(props) => props.bgclr ? props.bgclr : "linear-gradient(to right, #76b900, #333333)"}; // Gradient using Nvidia green and dark grey
    padding: ${(props) => props.pd ? props.pd : "70px"};
    border-radius: ${(props) => props.nobrdr ? "0px" : "5px"};
    text-align: center;
    overflow: hidden;
    @media (max-width: 599px) {
        padding: ${(props) => props.pd ? props.pd : "50px 10px"};
    }
`;


export const Img = styled.img`
width:${(props) => props.w ? props.w : "100%"};
height: ${(props) => props.h ? props.h : "auto"};
padding-top: ${(props) => props.ptop ? props.ptop : "0px"}; 
`

export const Absimg = styled.img`
position: absolute;
width: 100%;
object-fit:cover;
top: ${(props) => props.tp ? props.tp : "2%"};
left: 0%;
z-index: -1;
/* min-height: 100vh; */
@media(min-width:320px) and (max-width:900px){
    top:0%;
}
@media(min-width:1400px){
    top: 0%;
}
`
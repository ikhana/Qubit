import { Button } from '@mui/material';
import React from 'react';
import styled from '@emotion/styled';

const nvidiaGreen = '#76b900'; 
const darkGrey = '#333333';

const StyledButton = styled(Button)`
  text-transform: none;
  color: white;
  font-family: "PoppinsM";
  width: fit-content;
  min-width: 130px;
  min-height: 35px;
  border-radius: 10px;
  font-size: 14px;
  padding: 2px 10px;
  background: linear-gradient(to right, ${nvidiaGreen}, ${darkGrey}); 
  &.Mui-disabled {
    color: #707070 !important;
    border-color: #707070 !important;
    background: #979797 !important;
    cursor: not-allowed !important;
    z-index: 2;
  }
  &:hover {
    background-color: ${darkGrey};
    color: white;
  }
  @media (max-width: 599px) {
    font-size: 16px;
  }
`;

const PurpleButton = (props) => {
  return ( 
    <StyledButton {...props}>{props.children}</StyledButton>
  );
}
 
export default PurpleButton;

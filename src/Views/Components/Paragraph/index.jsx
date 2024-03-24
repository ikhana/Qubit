import { Typography } from '@mui/material';
import React from 'react';
import styled from '@emotion/styled';

const StyledPara = styled(Typography)`
  font-size: 1rem; /* Default font size for readability */
  line-height: 1.6; /* Improve line spacing for better readability */

  @media (max-width: 768px) {
    font-size: 0.95rem; /* Slightly smaller font size on tablets */
  }

  @media (max-width: 425px) {
    font-size: 0.9rem; /* Adjust for small devices for better readability */
  }
`

const Paragraph = (props) => {
    const {children}=props;
    return (
        <StyledPara variant="body2" color="white" fontFamily="OpenSans" textAlign="left" fontWeight="lighter"  {...props}>
            {children}
        </StyledPara>
    );
}
 
export default Paragraph;
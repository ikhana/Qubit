import * as React from 'react';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { StyledAccordian} from '../../Styles/Maintext.styles';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Paragraph from '../Paragraph';
import Mediumtxt from '../Mediumtxt';

export default function BasicAccordion(props) {
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = () => () => { 
      setExpanded(!expanded);
    };
  return (
    <div>
      <StyledAccordian onChange={handleChange()} sx={{marginTop: expanded?"30px !important":"0px"}}>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header" >
            <Paragraph my="0px" fontFamily="OpenSans" fontWeight="semibold" >{props.def1}</Paragraph>
        </AccordionSummary>
        <AccordionDetails>
          <Paragraph my="0px" sx={{marginRight:{xs:"0px", md:"95px"},fontFamily:'PopR', fontWeight:'400'}}>
            {props.def2} 
          </Paragraph>
        </AccordionDetails>
      </StyledAccordian>
    </div>
  );
}
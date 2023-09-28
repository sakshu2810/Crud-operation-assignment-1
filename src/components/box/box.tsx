
import { Box } from "@mui/material";
import './box.scss'
const Button = (props:any) => {
  return (
    <>
      <Box  
      className='custom-box'
        onClick={props.onClick}
        sx={props.sx}
      >
        {props.children}
      </Box>
    </>
  );
};

export default Button;

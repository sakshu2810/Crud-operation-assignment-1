import React from "react";
import "./input.scss";
import {
  TextField,
} from "@mui/material";


const Input = (props: {fullWidth?:any;variant?:any; renderOptionType?: unknown; id?: string | undefined; label?: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; placeholder?: string | undefined; disabled?: boolean | undefined; className?: string | undefined; onChange?: any; defaultValue?: unknown; style?: React.CSSProperties | undefined; value?: unknown; required?: boolean | undefined; autoComplete?: string | undefined; onClick?: () => any; }) => {

 
  return (
    <>
    
        <TextField
          id={props.id}
          fullWidth={props.fullWidth}
          label={props.label}
          variant={props.variant}
          placeholder={props.placeholder}
          disabled={props.disabled}
          className={props.className}
          onChange={(e) => props.onChange(e.target.value)}
          defaultValue={props.defaultValue}
          style={props.style}
          value={props.value}
          required={props.required}
          size="small"
          autoComplete={props.autoComplete ? props.autoComplete : "off"}
          onClick={() => props.onClick && props.onClick()}
          InputLabelProps={{
            style: {
              padding: "0px 5px",
              top: "-2px",
            },
          }}
          
        />
     </>
  );
};

export default Input;

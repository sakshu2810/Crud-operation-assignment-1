import React from "react";
import "./button.scss";

import { Button as MuiButton } from "@mui/material";

const Button = (props:any) => {
  return (
    <>
      <MuiButton
        variant={props.variant || "contained"}
        size={props.size}
        color={props.color || "primary"}
        disabled={props.disabled}
        className={props.className + " custom-button-class"}
        onClick={props.onClick}
        style={props.style}
      >
        {props.children}
      </MuiButton>
    </>
  );
};

export default Button;

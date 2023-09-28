import React from "react";
import { Menu as MuiMenu, MenuItem as MuiMenuItem, PopoverVirtualElement } from "@mui/material";

export const Menu = (props:
     { anchorEl: Element | (() => Element) | PopoverVirtualElement | (() => PopoverVirtualElement) | null | undefined; keepMounted:any;transformOrigin:any;open: boolean; anchorOrigin:any;onClose: ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void) | undefined;id:any; children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => {
  return (
    <MuiMenu
      anchorEl={props.anchorEl}
      open={props.open}
      onClose={props.onClose}
      id={props.id}
    >
      {props.children}
    </MuiMenu>
  );
};

export const MenuItem = (props: { onClick: React.MouseEventHandler<HTMLLIElement> | undefined; children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => {
  return (
    <MuiMenuItem onClick={props.onClick}>
      {props.children}
    </MuiMenuItem>
  );
};

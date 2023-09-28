import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import { useUserContext } from "../home/homeUserContext";

interface UserModalProps {
  openFilter: any;
  handleAddClose: any;
  user: any; // Pass the selected user for editing
  onSubmit:any;
}

const UserModal = (props: UserModalProps) => {
  const { addUser, updateUserData } = useUserContext();
  const [name, setName] = useState("");
  const [mobileNo, setMobileNo] = useState("");

  useEffect(() => {
    // Populate the fields with user data when the modal opens
    if (props.user) {
      setName(props.user.name);
      setMobileNo(props.user.mobileNo);
    } else {
      // Clear fields when creating a new user
      setName("");
      setMobileNo("");
    }
  }, [props.user]);

  const handleTextChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleTextChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMobileNo(e.target.value);
  };

  const handleSubmit = () => {
    if (props.user) {
      // If user is provided, update the user
      updateUserData(props.user.id, name, mobileNo);
    } else {
      // Otherwise, add a new user
      addUser(name, mobileNo);
    }
    props.handleAddClose();
  };

  return (
    <Dialog open={props.openFilter} onClose={props.handleAddClose} maxWidth="sm" fullWidth>
      <DialogTitle>{props.user ? "Edit User" : "Add User"}</DialogTitle>
      <DialogContent>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="dense"
          value={name}
          onChange={handleTextChange1}
        />
        <TextField
          label="Mobile number"
          variant="outlined"
          fullWidth
          margin="dense"
          value={mobileNo}
          onChange={handleTextChange2}
        />
      </DialogContent>
      <DialogActions style={{ display: "flex", justifyContent: "center" }}>
        <Button variant="contained" onClick={handleSubmit}>
          {props.user ? "Update" : "Submit"}
        </Button>
        <Button variant="contained" onClick={props.handleAddClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserModal;

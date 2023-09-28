import React, { useState } from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from "@mui/material";
import UserModal from "../userModal/userModal";
import { useUserContext } from "../home/homeUserContext";

export function UserTable() {
  const { userData, updateUserData, deleteUser, addUser } = useUserContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any | null>(null);

  const handleUpdate = (user: any) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleDelete = (id: number) => {
    deleteUser(id);
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const handleModalSubmit = (name: string, mobileNo: string) => {
    if (selectedUser) {
        console.log("s",selectedUser.id,)
      updateUserData(selectedUser.id,name, mobileNo); // Pass the ID when updating
    } else {
      addUser(name, mobileNo); // Add a new user
    }
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">User Name</TableCell>
              <TableCell align="center">Mobile number</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userData.map((user) => (
              <TableRow key={user.id}>
                <TableCell align="center">{user.name}</TableCell>
                <TableCell align="center">{user.mobileNo}</TableCell>
                <TableCell align="center">
                  <Button onClick={() => handleUpdate(user)}>Update</Button>
                  <Button onClick={() => handleDelete(user.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {isModalOpen && (
        <UserModal
          openFilter={isModalOpen}
          handleAddClose={() => {
            setIsModalOpen(false);
            setSelectedUser(null);
          }}
          user={selectedUser}
          onSubmit={(name: string, mobileNo: string) => handleModalSubmit(name, mobileNo)}  // Pass the onSubmit callback with separate arguments
        />
      )}
    </>
  );
}


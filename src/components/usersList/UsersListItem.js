import { Checkbox, FormControlLabel } from "@mui/material";
import React, { useState } from "react";
import { Button } from "../../atoms";
import { useDispatch } from "react-redux";
import { deleteUserData } from "../../redux/slices";

export const UsersListItem = ({ user }) => {
  const [checked, setChecked] = useState(false);
  const handleChecked = () => {
    console.log(user._id);
    setChecked((prev) => (prev = !prev));
  };
  console.log(checked);

  const dispatch = useDispatch();

  const deleteUserHandler = () => {
    dispatch(deleteUserData(user._id));
    console.log(user._id);
  };
  return (
    <div style={{ border: "2px solid red", padding: "20px" }}>
      <div style={{ display: "flex", gap: "10px" }}>
        <h1>{user.firstName}</h1>
        <h1>{user.lastName}</h1>
      </div>
      <h2>Status: {user.status}</h2>
      <h2>Role: {user.role}</h2>
      <div>
        <h3>Registration Date: {user.registrationTime}</h3>
      </div>
      <Checkbox checked={checked} onChange={handleChecked} />
      <Button onClick={deleteUserHandler}> Delete User</Button>
    </div>
  );
};

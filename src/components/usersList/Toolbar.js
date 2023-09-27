import React from "react";
import { useDispatch } from "react-redux";
import {
  blockUserData,
  unBlockUserData,
  deleteUserData,
  logoutUser,
  makeUserAdmin,
} from "../../redux/slices";
import { Button } from "../../atoms";
import { useUser } from "../../hooks/useUser";
import { useNavigate } from "react-router";
import { Box } from "@mui/material";
import classes from "./Toolbar.module.css";

export const Toolbar = ({ selectedUsers }) => {
  const dispatch = useDispatch();
  const { userInfo } = useUser();
  const navigate = useNavigate();

  const blockUsersHandler = () => {
    selectedUsers.forEach((userId) => dispatch(blockUserData(userId)));
    if (selectedUsers.includes(userInfo?._id)) {
      dispatch(logoutUser());
      navigate("./login");
    }
  };

  const unblockUsersHandler = () => {
    selectedUsers.forEach((userId) => dispatch(unBlockUserData(userId)));
  };

  const deleteUsersHandler = () => {
    selectedUsers.forEach((userId) => dispatch(deleteUserData(userId)));
    if (selectedUsers.includes(userInfo?._id)) {
      dispatch(logoutUser());
      navigate("./login");
    }
  };

  const makeUserAdminHandler = () => {
    selectedUsers.forEach((userId) => dispatch(makeUserAdmin(userId)));
  };

  return (
    <Box className={classes.mainCont}>
      <Button onClick={blockUsersHandler}>Block</Button>
      <Button onClick={unblockUsersHandler}>Unblock</Button>
      <Button onClick={deleteUsersHandler}>Delete</Button>
      <Button onClick={makeUserAdminHandler}>Make Admin</Button>
    </Box>
  );
};

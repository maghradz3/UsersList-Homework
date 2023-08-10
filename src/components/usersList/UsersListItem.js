import { Checkbox } from "@mui/material";
import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { useUser } from "../../hooks/useUser";
import classes from "./UsersListItem.module.css";
import { Tilt } from "react-tilt";

export const UsersListItem = ({ user, onCheckboxChange, isChecked }) => {
  const { userInfo } = useUser();
  const [checked, setChecked] = useState(isChecked);
  const handleChecked = () => {
    const newCheckedState = !checked;

    setChecked(newCheckedState);
    onCheckboxChange(user._id, newCheckedState);
  };

  const dispatch = useDispatch();
  const defaultOptions = {
    reverse: false,
    max: 20,
    perspective: 1000,
    scale: 1.05,
    speed: 700,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  return (
    <Tilt className={classes.mainCont} options={defaultOptions}>
      <div style={{ display: "flex", gap: "10px" }}>
        <h1>{user.firstName}</h1>
        <h1>{user.lastName}</h1>
      </div>

      {userInfo && (
        <>
          <h2>
            <span>Status:</span> {user.status}
          </h2>
          <h2>
            <span>Role:</span> {user.role}
          </h2>
          <div>
            <h3>
              <span>Registration Date:</span> {user.registrationTime}
            </h3>
            <h3>
              <span>Last Login:</span> {user.lastLoginTime}
            </h3>
          </div>
        </>
      )}

      <Checkbox checked={checked} onChange={handleChecked} />
    </Tilt>
  );
};

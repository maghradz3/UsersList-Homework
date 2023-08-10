import React, { useState } from "react";
import { useUser } from "../../hooks";
import { UsersListItem } from "./UsersListItem";
import { Checkbox } from "@mui/material";
import { Toolbar } from "./Toolbar";
import classes from "./UsersList.module.css";

export const UsersList = () => {
  const { users } = useUser();
  const [selectedUsers, setSelectedUsers] = useState([]);

  const [isMasterChecked, setIsMasterChecked] = useState(false);

  const handleMasterCheckboxChange = (event) => {
    setIsMasterChecked(event.target.checked);
    if (event.target.checked) {
      setSelectedUsers(users.map((user) => user._id));
    } else {
      setSelectedUsers([]);
    }
  };

  const handleCheckboxChange = (userId, isChecked) => {
    if (isChecked) {
      setSelectedUsers([...selectedUsers, userId]);
    } else {
      setSelectedUsers(selectedUsers.filter((id) => id !== userId));
    }
  };

  return (
    <div className={classes.mainCont}>
      <Toolbar selectedUsers={selectedUsers} />
      <Checkbox
        checked={isMasterChecked}
        onChange={handleMasterCheckboxChange}
      />
      <div className={classes.cardsCont}>
        {users?.map((user) => (
          <UsersListItem
            key={user._id}
            user={user}
            onCheckboxChange={handleCheckboxChange}
            isChecked={selectedUsers.includes(user._id)}
          />
        ))}
      </div>
    </div>
  );
};

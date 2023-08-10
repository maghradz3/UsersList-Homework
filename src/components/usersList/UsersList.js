import React from "react";
import { useUser } from "../../hooks";
import { UsersListItem } from "./UsersListItem";

export const UsersList = () => {
  const { users } = useUser();
  console.log(users);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        padding: "30px",
      }}
    >
      {users?.map((user) => (
        <UsersListItem key={user._id} user={user} />
      ))}
    </div>
  );
};

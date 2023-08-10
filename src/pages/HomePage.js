import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { UsersList } from "../components/usersList";

import { fetchUsersData } from "../redux/slices/userSlice";

export const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersData());
  }, []);
  return (
    <div>
      <UsersList />
    </div>
  );
};

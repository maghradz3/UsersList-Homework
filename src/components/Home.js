import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsersData } from "../redux/slices/userSlice";

export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsersData());
  }, []);
  return <div>Home</div>;
};

import React from "react";
import { Button } from "../../atoms";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/slices";
import { useNavigate } from "react-router";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(logoutUser());
    //   .unwrap()
    //   .then(() => navigate("/register"))
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  return (
    <div>
      <Button onClick={logoutHandler}>Log Out</Button>
    </div>
  );
};

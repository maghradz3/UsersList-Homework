import React from "react";
import { Home } from "../components/Home";
import { Header } from "../components/header";
import { UsersList } from "../components/usersList";

export const HomePage = () => {
  return (
    <div>
      <Header />
      <Home />
      <UsersList />
    </div>
  );
};

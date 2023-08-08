import { useSelector } from "react-redux";

export const useUser = () => {
  const users = useSelector((state) => state.useReducer.users);

  return users;
};

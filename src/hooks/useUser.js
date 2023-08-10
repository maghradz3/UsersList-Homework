import { useSelector } from "react-redux";

export const useUser = () => {
  const users = useSelector((state) => state.user.users);
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);
  const userInfo = useSelector((state) => state.user.userInfo);

  return { users, loading, error, userInfo };
};

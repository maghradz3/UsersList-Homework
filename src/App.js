import { useDispatch } from "react-redux";
import { RouteComponents } from "./Routes";
import { useEffect } from "react";
import { fetchUsersData } from "./redux/slices/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersData());
  }, []);

  return (
    <div>
      <RouteComponents />
    </div>
  );
}

export default App;

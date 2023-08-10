import { useDispatch } from "react-redux";
import { RouteComponents } from "./Routes";
import { useEffect } from "react";
import { fetchUsersData } from "./redux/slices/userSlice";
import { Header } from "./components/header";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersData());
  }, []);

  return (
    <div>
      <Header />
      <RouteComponents />
    </div>
  );
}

export default App;

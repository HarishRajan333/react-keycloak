import { useContext } from "react";
import { UserContext } from "./App";

const AdminPanel = () => {
  const { logout } = useContext(UserContext);

  return (
    <div>
      <h1>logged in as admin</h1>
      <button onClick={() => logout()}>logout</button>
    </div>
  );
};

export default AdminPanel;

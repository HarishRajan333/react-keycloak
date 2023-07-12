import { useContext, useEffect, useState } from "react";
import { UserContext } from "./App";

const SecuedRoute = ({ children }) => {
  const { roles, logout } = useContext(UserContext);
  const [access, setAccess] = useState(false);

  useEffect(() => {
    if (roles?.includes("admin")) {
      setAccess(true);
    }
  }, []);

  return access ? (
    <>{children}</>
  ) : (
    <div>
      <h1>not allowed</h1>
      <button onClick={() => logout()}>logout</button>
    </div>
  );
};

export default SecuedRoute;

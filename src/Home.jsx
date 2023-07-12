import React from "react";
// import { useKeycloak } from "@react-keycloak/web";
import Login from "./login";
import Log from "./login";

const Home = ({ children }) => {
  // const { keycloak, initialized } = useKeycloak();

  // if (!keycloak.authenticated) {
  //   console.log(keycloak);
  //   return <Login />;
  // }

  return <div>{children}</div>;
};

export default Home;

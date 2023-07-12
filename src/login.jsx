import Keycloak from "keycloak-js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

let initOptions = {
  url: "http://localhost:8080/",
  realm: "bassure",
  clientId: "ats-react",
};

const Login = ({children}) => {
  const [keycloak, setKeycloak] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    let keycloak = new Keycloak(initOptions);
    keycloak.init({ onLoad: "login-required" }).then((authenticated) => {
      setKeycloak(keycloak);
      setAuthenticated(authenticated);
    });
  }, []);

  if (keycloak) {
    if (authenticated) return <div>{children}</div>;
    else return <div></div>;
  }

  return <div>loading...</div>;
};

export default Login;

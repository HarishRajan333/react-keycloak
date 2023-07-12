import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Keycloak from "keycloak-js";
import reportWebVitals from "./reportWebVitals";

let initOptions = {
  url: "http://localhost:8080/",
  realm: "bassure",
  clientId: "atsReact",
};

let keycloak = new Keycloak(initOptions);
keycloak.init({ onLoad: "login-required" }).then((authenticated) => {
  if (!authenticated) {
    window.location.reload();
  } else {
    console.info("Authenticated");
  }

  sessionStorage.setItem("authentication", keycloak.token);
  sessionStorage.setItem("refreshToken", keycloak.refreshToken);

  if (keycloak.resourceAccess.atsReact) {
    console.log(keycloak.resourceAccess.atsReact.roles);
  }

  const logout = () => {
    keycloak.logout();
  };

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    keycloak.authenticated && keycloak.resourceAccess.atsReact ? (
      <React.StrictMode>
        <App
          keycloak={keycloak.tokenParsed}
          logout={logout}
          roles={keycloak.resourceAccess.atsReact.roles}
        />
      </React.StrictMode>
    ) : (
      <div>
        {window.alert("not access")}
        {logout()}
      </div>
    )
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

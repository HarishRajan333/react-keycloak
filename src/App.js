import logo from "./logo.svg";
import "./App.css";
// import { ReactKeycloakProvider } from "@react-keycloak/web";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import Login from "./login";
import SecuedRoute from "./AdminSecureRoute";
import AdminPanel from "./AdminPanel";

export const UserContext = createContext();

function App({ keycloak, logout, roles }) {
  useEffect(() => {
    console.log(keycloak);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ keycloak, logout, roles }}>
          <Routes>
            <Route
              path="/admin"
              element={
                <SecuedRoute>
                  <AdminPanel />
                </SecuedRoute>
              }
            />
            <Route
              path="/home"
              element={
                <div>
                  <h1>welcome</h1>
                  <button onClick={() => logout()}>logout</button>
                </div>
              }
            />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

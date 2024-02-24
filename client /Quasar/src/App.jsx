import React from "react";
import { AuthContextProvider } from "./context/AuthContext";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
        <Router />
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}

export default App;

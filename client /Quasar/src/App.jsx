import React from "react";
// import { AuthContextProvider } from "./context/AuthContext";
// import { Router } from "./Router";
// import { BrowserRouter } from "react-router-dom";
import JoinRoomContainer from "./components/joinroom";

function App() {
  return (
    <>
      {/* <AuthContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AuthContextProvider> */}
      <JoinRoomContainer />
    </>
  );
}

export default App;

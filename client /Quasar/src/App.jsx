import React from "react";
// import { AuthContextProvider } from "./context/AuthContext";
// import { Router } from "./Router";
// import { BrowserRouter } from "react-router-dom";
import JoinRoomContainer from "./components/joinroom";
import { AuthContextProvider } from "./context/AuthContext";
import { Router } from "./Router";
import { BrowserRouter} from "react-router-dom";

// import { SignUp } from "./components/signup.jsx";
// // import { Sticky } from "./components/sticky.jsx";
// import Productivity from "./components/Productivity.jsx";
// import Focusedroom from "./components/focusroom/Focusedroom.jsx";
// // import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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

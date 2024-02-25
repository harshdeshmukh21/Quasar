import {Route, Routes} from 'react-router-dom';
import { SignUp } from "./components/signup.jsx";
import { Homepage } from "./components/homepage/Homepage.jsx";
import  Productivity  from "./components/Productivity.jsx";
import Focusedroom from './components/focusroom/Focusedroom.jsx';
import NavbarMain from './components/Navbar.jsx';
import JoinRoomContainer from './components/joinroom.jsx';
import './App.css'



export const Router = () => {
    return (
        <>
<div className="nav-main ">
    <NavbarMain />
  </div>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/productivity" element={<Productivity />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/focus-room" element={<Focusedroom />} />
                <Route path="/focus-join" element={<JoinRoomContainer />} />
            </Routes>
        </>
    );
    }
import {Route, Routes} from 'react-router-dom';
import { SignUp } from "./components/signup.jsx";
import { Homepage } from "./components/homepage/Homepage.jsx";
import  Productivity  from "./components/Productivity.jsx";
import Focusedroom from './components/focusroom/Focusedroom.jsx';
import NavbarMain from './components/Navbar.jsx';

export const Router = () => {
    return (
        <>
        <NavbarMain/>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/productivity" element={<Productivity />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/focus-room" element={<Focusedroom />} />
            </Routes>
        </>
    );
    }
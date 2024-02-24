import {Route, Routes} from 'react-router-dom';
import { SignUp } from "./components/signup.jsx";
import { Homepage } from "./components/homepage/Homepage.jsx";
import  Productivity  from "./components/Productivity.jsx";

export const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/productivity" element={<Productivity />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </>
    );
    }
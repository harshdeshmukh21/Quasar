import React from "react";

import "./pomodoro.css";
import focus from "../components/focusimg.png";

export const Focusroom = () => {
  return (
    <div className="focus h-[39vh]">
      <img src={focus} alt="" className="rounded-md w-full h-full" />
    </div>
  );
};

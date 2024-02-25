import React, { useState } from "react";
import "../css/joinroom.css";
// import NavbarMain from "./Navbar";

const JoinRoomContainer = () => {
  const [roomCode, setRoomCode] = useState("");

  const handleJoinNow = () => {
    if (roomCode.trim() === "") {
      alert("Please enter a room code");
      return;
    }

    console.log("Joining room with code:", roomCode);

    setRoomCode("");
  };

  const handleCreateRoom = () => {
    console.log("Creating new room");

    setRoomCode("");
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
      id="main"
    >
      <div className="box">
        <div className="text-6xl font-bold mb-8 mt-10">
          <h1>Join Room</h1>
        </div>
        <div className="text-2xl font-bold mb-8">
          Join or create an exclusive focus room where <br></br> all your
          distractions fade and productivity prevails!
        </div>
        <input
          className="input"
          placeholder="Enter room code"
          value={roomCode}
          onChange={(e) => setRoomCode(e.target.value)}
        />
        <div className="flex justify-center mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={handleJoinNow}
          >
            Join Now
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleCreateRoom}
          >
            Create Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinRoomContainer;

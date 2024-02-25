import React, { useState, useEffect } from "react";
import "../css/joinroom.css";
<<<<<<< Updated upstream
import { addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
=======
import { getDocs, collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
>>>>>>> Stashed changes

const JoinRoomContainer = () => {
  const [roomCode, setRoomCode] = useState("");
  const navigate = useNavigate();

  const handleCreateRoom = async () => {
    console.log("Creating new room");
    navigate('/focus-room')

    try {
      const colRef = collection(db, "room");
      const snapshot = await getDocs(colRef);

      let createRoom = [];
      snapshot.forEach((doc) => {
        createRoom.push({ ...doc.data(), id: doc.id });
      });
      console.log(createRoom);

      const newDocRef = await addDoc(colRef, {
        roomid: roomCode,
      });
      console.log("Document written with ID: ", newDocRef.id);
    } catch (err) {
      console.log(err.message);
    }
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
          Join or create an exclusive focus room where <br /> all your
          distractions fade and productivity prevails!
        </div>
        <input
          className="input"
          placeholder="Enter room code"
          value={roomCode}
          onChange={(e) => setRoomCode(e.target.value)}
        />
        <div className="flex justify-center mt-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2">
            Join Now
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleCreateRoom}
            id="roombanao"
          >
            Create Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinRoomContainer;

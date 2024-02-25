import React, { useState } from "react";
import NavbarMain from "../Navbar";
import Profile from "./Profile";
import "./focusroom.css";
import { getDocs, collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

const Focusedroom = () => {
  const [roomCode, setRoomCode] = useState(""); // Moved the useState here

  const handleCreateRoom = async () => {
    console.log("Creating new room");

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
    <>
      <p1 className="mt-32">
        You have now entered the focus room. Please ensure that u stay focused
        and determined to your task.
      </p1>

      <p1 className="">Create a topic for your room</p1>

      <div className="enter">
        <input
          className="input"
          placeholder="Enter room code"
          value={roomCode}
          onChange={(e) => setRoomCode(e.target.value)}
        />
        <button onClick={handleCreateRoom} className="button">
          Create
        </button>
      </div>

      <div className="App">
        <div className="App-column1">
          <div className="user-container">
            <Profile />
          </div>
          <div className="user-container">
            <Profile />
          </div>
          <div className="user-container">
            <Profile />
          </div>
          <div className="user-container">
            <Profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Focusedroom;

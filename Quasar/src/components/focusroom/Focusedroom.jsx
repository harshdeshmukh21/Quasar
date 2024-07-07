import React, { useState, useEffect } from "react";
import NavbarMain from "../Navbar";
import Profile from "./Profile";
import "./focusroom.css";
import { getDocs, collection, updateDoc, doc, getDoc, onSnapshot, arrayRemove } from "firebase/firestore";
import { db } from "../../firebase";
import { useParams } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Lofi from '../../components/lofi/lofi'

const Focusedroom = () => {
  const [roomCode, setRoomCode] = useState("");
  const { id } = useParams();
  const [roomData, setRoomData] = useState(null);
  const navigate = useNavigate();

  const { user } = UserAuth();

  useEffect(() => {
    const fetchRoomData = async () => {
      const docRef = doc(db, "room", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setRoomData(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };

    fetchRoomData();
    const docRef = doc(db, "room", id);
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setRoomData(docSnap.data());
      } else {
        console.log("No such document!");
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, [id]);

  console.log(roomData);

  const leaveRoom = async () => {
    const docRef = doc(db, "room", id);
    await updateDoc(docRef, {
      photoURLs: arrayRemove(user.photoURL), // remove current user's photoURL
      displayNames: arrayRemove(user.displayName) // remove current user's displayName
    });

    // navigate back to the previous page or home page
    navigate('/productivity');
  }

  return (
    <>
      <Lofi />
      <div className="focused-room-container flex flex-col">
        <div className="room-info">
          <p className="room-message">You have now entered the focus room. Please ensure that you stay focused and determined to {roomData && roomData.title}</p>

        </div>
        <div className="user-profiles">

          {roomData && (
            roomData.displayNames.map((displayName, index) => (
              <Profile key={index} className="user-profile" photoUrl={roomData.photoURLs[index]} displayname={displayName} />
            ))
          )}
        </div>
        <div className="btns mt-8 "><a className="room-id p-3  cursor-pointer rounded-md" onClick={() => navigator.clipboard.writeText(id)}>{id} <Button color="red" className="cursor-pointer  mr-0 ml-2 mb-2 mt-2 p-1 rounded-md" onClick={leaveRoom}>Leave Room</Button></a>
        </div>

      </div>
    </>
  );
};

export default Focusedroom;

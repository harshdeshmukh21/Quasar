import React, { useState, useEffect } from "react";
import "./lofi.css";
import playlist from "./playlist";

function Lofi() {
  const [songs, setSongs] = useState(playlist);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const currentSong = songs[currentSongIndex];

  const handleNextSong = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
  };

  useEffect(() => {
    const audioElement = document.querySelector("audio");

    const handleAudioEnded = () => {
      handleNextSong();
    };

    audioElement.addEventListener("ended", handleAudioEnded);


    return () => {
      audioElement.removeEventListener("ended", handleAudioEnded);
    };
  }, [currentSongIndex, songs]);

  const handlePlayNext = () => {
    handleNextSong();
  };

  const handlePlayPrev = () => {
    const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(prevIndex);
  };

  return (
    <div className="App">
      <div className="player">
        <audio controls autoPlay src={currentSong.audio}></audio>
        {/* <div className="controls">
          <button onClick={handlePlayPrev}>Previous</button>
          <button onClick={handlePlayNext}>Next</button>
        </div> */}
      </div>
    </div>
  );
}

export default Lofi;

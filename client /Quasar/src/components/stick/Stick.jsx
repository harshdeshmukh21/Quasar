import React, { useState } from 'react';
import './stick.css';

const Stick = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const clearInput = () => {
    setTitle('');
    setDescription('');
  };

  return (
    <div className="flex items-center h-full w-full justify-center">
      <div className="sticky-note">
      <div className="title">
        <input
          type="text"
          placeholder="Title"
          value='NoteMagnet'
          onChange={(e) => setTitle(e.target.value)}
          className="sticky-title font-bold "
        />
      </div>
      <div className="desc ">
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="sticky-desc"
        ></textarea>
      </div>
      <button
        className="clear-button"
        onClick={clearInput}
      >
        X
      </button>
    </div>
    </div>
    
  );
};

export default Stick;

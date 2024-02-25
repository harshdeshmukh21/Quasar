import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import './chat.css'
import { TwitterChatboxTextarea } from './Textbox';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`chatbot ${isOpen ? 'open' : ''}`}>
      <div className ="header " onClick={toggleChatbot}>
        <h3>Chatbot</h3>
        <button onClick={toggleChatbot}><AiOutlineClose /></button>
      </div>
      <div className="content flex flex-col ">
        {/* Chatbot content here */}
<        TwitterChatboxTextarea />
      </div>

    </div>
  );
};

export default Chatbot;

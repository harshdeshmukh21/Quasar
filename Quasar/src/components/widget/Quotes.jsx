import React, { useState } from "react";
import "../../App.css";

const Quotes = () => {
  const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Life is not a problem to be solved, but a reality to be experienced. – Soren Kierkegaard",
    "In the end, it's not the years in your life that count. It's the life in your years. – Abraham Lincoln",
    "Life is a journey, and if you fall in love with the journey, you will be in love forever. – Peter Hagerty",
    "The purpose of our lives is to be happy. – Dalai Lama",
    "Life is like riding a bicycle. To keep your balance, you must keep moving. – Albert Einstein",
  ];

  const [randomQuote, setRandomQuote] = useState(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  });

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  };

  return (
    <div className="quote text-center p-12 mt-2 rounded-md text-white opacity-65">
      <p className="">{randomQuote}</p>
    </div>
  );
};

export default Quotes;

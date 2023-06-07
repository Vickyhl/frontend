import React, { useState } from "react";
import ChatBot from "./ChatBot";
import homeImg from "./images/menuImg(1).jpeg";
import welcome from "./images/welcome.png";
import chatIcon from "./images/chatIcon.png";
import "./css/style.css";

const Home = () => {
  const [showChatBot, setShowChatBot] = useState(false);

  const openChatBot = () => {
    setShowChatBot(true);
  };

  return (
    <>
      {" "}
      <img className="welcome" src={welcome} alt="welcome message" />{" "}
      <div className="container-home">
        <img className="img-fluid" src={homeImg} alt="home image" />
        {showChatBot ? (
          <ChatBot />
        ) : (
          <img
            src={chatIcon}
            alt="Chat Icon"
            className="chat-icon"
            onClick={openChatBot}
          />
        )}
      </div>
    </>
  );
};

export default Home;

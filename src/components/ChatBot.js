import React, { useState, useEffect } from "react";
import "./css/chat.css";

const ChatBot = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleUserMessage = () => {
    if (userInput.trim() !== "") {
      const newMessage = {
        sender: "user",
        message: userInput.trim(),
      };

      setChatHistory([...chatHistory, newMessage]);
      setUserInput("");
    }
  };

  const generateBotResponse = (userInput) => {
    const userMessage = userInput.trim().toLowerCase();

    let botResponse;

    if (
      userMessage.includes("personalized diet menu") &&
      userMessage.includes("weight loss")
    ) {
      botResponse =
        "In order to create a nutrition menu, you should register on the website and go to the Nutrition menu tab and then click on the Purchase menu.";
    } else if (
      userMessage.includes("personalized nutrition menu") &&
      userMessage.includes("weight maintenance")
    ) {
      botResponse =
        "In order to create a nutrition menu, you should register on the website and go to the Nutrition menu tab and then click on the Purchase menu.";
    } else if (
      userMessage.includes("update my personal details") &&
      userMessage.includes("personal profile")
    ) {
      botResponse =
        "Go to the My profile tab and then click on Edit your profile so you can make changes to your personal profile.";
    } else if (
      userMessage.includes("allergic to certain products") &&
      userMessage.includes("replacement of the products")
    ) {
      botResponse =
        "I suggest you read the health declaration in order to get information about special situations.";
    } else if (
      userMessage.includes("nutritional menus for vegetarians/vegans")
    ) {
      botResponse =
        "I suggest you read the health declaration in order to get information about special situations.";
    } else if (userMessage.includes("payment of the nutrition menu")) {
      botResponse =
        "In order to pay for the nutrition menu you must make sure you are registered on the website, then you can go to the Nutrition menu tab and then click on Purchase menu. After filling in the details you will be transferred to the payment page.";
    } else if (userMessage.includes("receipt for the payment")) {
      botResponse =
        "Yes of course, after payment there is another page if you want a receipt click on 'YES' and the receipt will be sent to your email automatically. Thanks a lot for the help!";
    } else if (
      userMessage.includes("difference between a regular menu") &&
      userMessage.includes("recipe-based menu")
    ) {
      botResponse =
        "Both menus consist of 5 meals. In a normal nutrition menu at each meal, you will receive a list of products from which you can put together a meal. In the recipe-based nutrition menu, you will receive a ready-made recipe for each main meal that is adapted to your daily calorie intake.";
    } else if (
      userMessage.includes("how many meals") &&
      userMessage.includes("nutrition menu is divided into")
    ) {
      botResponse =
        "The nutrition menu is divided into 5 meals: breakfast, snack, lunch, snack, and dinner.";
    } else if (userMessage.includes("creating a shopping list")) {
      botResponse =
        "Sure, there is an option to view the shopping list and export them to a PDF file so that the list appears in an orderly manner, and you can mark the products you already have at home or have already purchased.";
    } else if (userMessage.includes("training program")) {
      botResponse =
        "Yes, there is a training program on the site that is divided by gender and by training level (beginner/advanced).";
    } else {
      botResponse = "Hey, how can we help you?";
    }

    const newMessage = {
      sender: "bot",
      message: botResponse,
    };

    setChatHistory([...chatHistory, newMessage]);
  };

  useEffect(() => {
    if (
      chatHistory.length > 0 &&
      chatHistory[chatHistory.length - 1].sender === "user"
    ) {
      generateBotResponse(chatHistory[chatHistory.length - 1].message);
    }
  }, [chatHistory]);

  return (
    <div>
      <div className="chat-window">
        {chatHistory.map((message, index) => (
          <div className={`message-wrapper ${message.sender}`} key={index}>
            <div className={`message-bubble ${message.sender}`}>
              <span className="message-text">{message.message}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="user-input">
        <input
          type="text"
          placeholder="Enter your message..."
          value={userInput}
          onChange={handleUserInput}
        />
        <button onClick={handleUserMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBot;

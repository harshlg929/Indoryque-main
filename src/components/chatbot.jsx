import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig"; // Import Firebase config
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "firebase/firestore";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  const sendMessage = async () => {
    if (input.trim()) {
      await addDoc(collection(db, "messages"), {
        text: input,
        sender: "user",
        timestamp: serverTimestamp(),
      });
      setInput("");
      // await fetchBotResponse(input); 
    }
  };

  const fetchBotResponse = async (message) => {
    const response = await fetch("https://your-firebase-function-url/chatbotResponse", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });
    const data = await response.json();
    await addDoc(collection(db, "messages"), {
      text: data.botReply,
      sender: "bot",
      timestamp: new Date(),
    });
  };
  const openChatbot = () => {
    setIsOpen(true); // Open the chatbot
  };

  // Close the chatbot when clicked
  const closeChatbot = () => {
    setIsOpen(false); // Close the chatbot
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault(); // Prevent the default newline behavior
      sendMessage(); // Send the message
    }
  };

  return (
    <>
    {/* Button to open the chatbot */}
    {!isOpen && (
      <button
        onClick={openChatbot}
        className="chatbot-button bottom-6 right-6 p-4 bg-blue-500 text-white rounded-full shadow-lg"
      >
        Chat
      </button>
    )}

    {/* Chatbot UI */}
    {isOpen && (
    <div className="flex flex-col border rounded-lg chatbox container">
      <div className="flex-1 overflow-y-auto p-2">
        {messages.map((msg) => (
          <div key={msg.id} className={msg.sender === "user" ? "text-right" : "text-left chatbox"}>
            <p className="chatbox-input">
              {msg.text}
            </p>
          </div>
        ))}
      </div>
      <div className="">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 p-1 border rounded-l-lg "
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}  className="p-1 text-whiter">Send</button>
      </div>
      {/* Close button */}
      <button
            onClick={closeChatbot}
            className="chatbot-button bottom-6 right-6 p-4 bg-blue-500 text-white rounded-full shadow-lg"
          >
            Close
          </button>
    </div>
    )}
    </>
  );
};

export default Chatbot;

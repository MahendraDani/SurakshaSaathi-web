import './App.css';
import * as io from "socket.io-client";

import { useState } from 'react';

import Portal from './Portal'


const socket = io.connect("http://localhost:3000");


function Chat() {
  const [username1, setUsername1] = useState("");
  const [username2, setUsername2] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinChat = () => {
    if (username1 !== "" && username2 !== "") {
      socket.emit("join_chat", username2);
      setShowChat(true);
    }
  }

  return (
    <div className="App">
      {!showChat ? (
        <div className='joinChatContainer'>
          <h3>Communicate</h3>
          <input
            type="text"
            placeholder="Rescue Agency 1..."
            onChange={e => {
              setUsername1(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Rescue Agency 2..."
            onChange={e => {
              setUsername2(e.target.value);
            }}
          />
          <button onClick={joinChat}>Join the chat</button>
        </div>
      ) : (
        <div>
          <Portal socket={socket} username1={username1} username2={username2}/>
        </div>
      )}
    </div>
  );
}

export default Chat;

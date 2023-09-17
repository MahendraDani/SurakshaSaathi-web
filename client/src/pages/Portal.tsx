import { useEffect, useState } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import { Socket } from 'socket.io-client'; // Import the appropriate Socket type

interface MessageData {
  reciver: string;
  author: string;
  message: string;
  time: string;
}

interface ChatProps {
  socket: Socket;
  username1: string;
  username2: string;
}

function Chat({ socket, username1, username2 }: ChatProps): JSX.Element {
  const [currentMessage, setCurrentMessage] = useState<string>("");
  const [messageList, setMessageList] = useState<MessageData[]>([]);

  const sendMessage = async (): Promise<void> => {
    if (currentMessage !== "") {
      const messageData: MessageData = {
        reciver: username2,
        author: username1,
        message: currentMessage,
        time: `${new Date(Date.now()).getHours()}:${new Date(Date.now()).getMinutes()}`,
      };
      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data: MessageData) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <div className='chat-window'>
      <div className='chat-header'>
        <p>Live Chat</p>
      </div>
      <div className='chat-body'>
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent, index) => {
            return (
              <div
                key={index}
                className='message'
                id={username1 === messageContent.author ? "you" : "other"}
              >
                <div>
                  <div className='message-content'>
                    <p>{messageContent.message}</p>
                  </div>
                  <div className='message-meta'>
                    <p id='time'>{messageContent.time}</p>
                    <p id='author'>{messageContent.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className='chat-footer'>
        <input
          type='text'
          value={currentMessage}
          placeholder='Hey...'
          onChange={(e) => {
            setCurrentMessage(e.target.value);
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
}

export default Chat;

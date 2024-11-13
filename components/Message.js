'use client'


import React, { useState, useEffect } from 'react';
import { ChatFeed, Message } from 'react-chat-ui';
import io from 'socket.io-client';

const socket = io('http://localhost:3000'); 

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const handleReceiveMessage = (text) => {
      console.log('Received message:', text);
      setMessages((prevMessages) => [
        ...prevMessages,
        new Message({ id: 1, message: text }),
      ]);
    };
  
    socket.on('receiveMessage', handleReceiveMessage);
  
    return () => {
      
      socket.off('receiveMessage', handleReceiveMessage);
    };
  }, []);
  

 

  const handleSendMessage = () => {
    if (input.trim()) {
      // Send the message to the backend
      socket.emit('sendMessage', input);
      setMessages((prevMessages) => [
        ...prevMessages,
        new Message({ id: 0, message: input }),
      ]);
      setInput('');
      console.log(setMessages);
    }
  };
  socket.on('receiveMessage', (text) => {
    setMessages((prevMessages) => {
      
      return prevMessages;
    });
  });
  

  return (
    <div className="w-full max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-4 flex flex-col h-[600px]">
      {/* Chat Feed */}
      <div className="flex-1 overflow-y-auto mb-4">
        <ChatFeed
          messages={messages}
          isTyping={false}
          hasInputField={false}
          showSenderName
          bubblesCentered={false}
          bubbleStyles={{
            text: { fontSize: 16 },
            chatbubble: { borderRadius: 20, padding: 10 },
          }}
        />
      </div> 

      {/* Input area */}
      <div className="flex items-center sm:space-x-3 sm:pt-4 sm:mt-2  space-x-2 border-t pt-3 mt-2">
        <input
          type="text"
          value={input}

          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className=' max-w-[400px] w-full mx-auto px-3 py-2 sm:py-3 border border-solid border-blue-400 rounded-full outline-none duration-200 hover:border-blue-600 focus:border--600 '
        />
        
        <button
          onClick={handleSendMessage}
          className="px-4 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Send
        </button>
      </div>
    </div>
  );
}

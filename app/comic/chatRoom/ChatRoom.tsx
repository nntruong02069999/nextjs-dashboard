"use client";

import React, { useEffect, useState, useRef } from "react";
import { Chat, ReactionType } from "./chat.type";
import "./chatRoom.css";

const WEBSOCKET_URL = "ws://localhost:7878/chat";

const reactionIcons: Record<ReactionType, string> = {
  like: "👍",
  love: "❤️",
  lol: "😂",
  wow: "😮",
  sad: "😢",
  angry: "😠",
};

interface ChatRoomProps {
  token: string; // JWT token for authentication
}

const ChatRoom: React.FC<ChatRoomProps> = ({ token }) => {
  const [messages, setMessages] = useState<Chat[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const wsRef = useRef<WebSocket | null>(null);
  const getWebSocketProtocol = (token: string) => [`token-${token}`];
  useEffect(() => {
    // Initialize WebSocket connection
    const ws = new WebSocket(WEBSOCKET_URL, getWebSocketProtocol(token));
    wsRef.current = ws;

    ws.onopen = () => {
      console.log("Connected to chat server");
      // Request recent messages
      ws.send(JSON.stringify({ event: "get-recent-messages" }));
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("data WebSocket", data);
      switch (data.event) {
        case "recent-messages":
          setMessages(data.data);
          break;
        case "new-message":
          setMessages((prev) => [...prev, data.data]);
          break;
        case "reaction-message":
          setMessages((prev) =>
            prev.map((msg) =>
              msg._id === data.data.messageId
                ? { ...msg, reactions: data.data.reactions }
                : msg
            )
          );
          break;
        case "error":
          console.error("Received error:", data.data);
          break;
      }
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    ws.onclose = () => {
      console.log("Disconnected from chat server");
    };

    return () => {
      ws.close();
    };
  }, [token]);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !wsRef.current) return;

    wsRef.current.send(
      JSON.stringify({
        event: "send-message",
        data: {
          message: newMessage,
        },
      })
    );
    setNewMessage("");
  };

  const sendReaction = (messageId: string, reaction: ReactionType) => {
    if (!wsRef.current) return;

    wsRef.current.send(
      JSON.stringify({
        event: "reaction-message",
        data: {
          messageId,
          reaction,
        },
      })
    );
  };

  return (
    <div className="chat-room">
      <div className="messages-container">
        {messages.map((msg) => (
          <div key={msg._id} className="message">
            <img
              src={msg.customerInfo.avatar}
              alt={msg.customerInfo.name}
              className="avatar"
            />
            <div className="message-content">
              <div className="message-header">
                <span className="username">{msg.customerInfo.name}</span>
                <span className="timestamp">
                  {new Date(msg.createdAt).toLocaleString()}
                </span>
              </div>
              <p>{msg.message}</p>
              {msg.gif && (
                <img src={msg.gif} alt="GIF" className="message-gif" />
              )}
              <div className="reactions-container">
                <div className="reaction-counts">
                  {Object.values(reactionIcons).map((icon, index) => {
                    const reactionType = Object.keys(reactionIcons)[
                      index
                    ] as ReactionType;
                    const count =
                      msg.reactions?.filter(
                        (reaction) => reaction.type === reactionType
                      ).length || 0;
                    return (
                      <span key={reactionType} className="reaction-count">
                        {icon} {count}
                      </span>
                    );
                  })}
                </div>
                <div className="reaction-buttons">
                  {Object.entries(reactionIcons).map(([reaction, icon]) => (
                    <button
                      key={reaction}
                      className={`reaction-button ${
                        msg.reactions?.some(
                          (r) => r.type === reaction && r.customerId === 440
                        )
                          ? "active"
                          : ""
                      }`}
                      onClick={() =>
                        msg._id &&
                        sendReaction(msg._id, reaction as ReactionType)
                      }
                    >
                      {icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="message-form">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatRoom;

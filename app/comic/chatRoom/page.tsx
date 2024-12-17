import React from "react";
import ChatRoom from "./ChatRoom";

function App() {
  // Replace with your actual JWT token
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6NDQwLCJpc1ZpcCI6ZmFsc2UsInNjb3BlIjoiY3VzdG9tZXIiLCJleHBpcmVBY2Nlc3NUb2tlbiI6MzE1MzYwMDAwMCwiZXhwaXJlUmVmcmVzaFRva2VuIjozMTUzNjAwMDAwMH0sImlhdCI6MTcyOTI0NTE4MywiZXhwIjo0ODgyODQ1MTgzfQ.6Fd4s6UvLDJvv1TYl8wBtWlMNTWCUU0e5m3GjLM_A_k";

  return (
    <div className="App">
      <h1>Chat Room</h1>
      <ChatRoom token={token} />
    </div>
  );
}

export default App;

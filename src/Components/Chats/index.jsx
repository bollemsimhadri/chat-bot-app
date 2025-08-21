import { useUserData, useSignOut } from '@nhost/react'
import { FaRobot } from 'react-icons/fa'   // ✅ React Icon
import './index.css'

export default function Chats() {
  const user = useUserData()
  const { signOut } = useSignOut()

  if (!user) {
    return (
      <div className="not-logged-in">
        <h2>Please sign in to access the chat.</h2>
      </div>
    )
  }

  return (
    <div className="app-container">

      <div className="sidebar">
        <h2 className="logo">AI Chat</h2>
        <button className="new-chat">+ New Chat</button>

        <div className="chat-list">
          <div className="chat-item">My AI Chat</div>
        </div>

        {user && (
          <div className="user-info">
            <span>{user.displayName || user.email}</span>
            <button onClick={signOut} className="logout-btn">Logout</button>
          </div>
        )}
      </div>

      <div className="chat-area">
        <a
          href="https://bollemsimhadri.app.n8n.cloud/webhook/c4b58d85-6bd8-4b04-b599-c5d55308f721/chat"
          target="_blank"
          rel="noopener noreferrer"
          className="icon flex flex-col items-center text-blue-600 hover:text-blue-800 transition"
        >
          <FaRobot size={120} />   
          <span className="span">Chatbot here</span>
        </a>
      </div>
    </div>
  )
}

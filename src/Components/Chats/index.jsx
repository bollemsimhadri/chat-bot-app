import { useUserData, useSignOut } from '@nhost/react'
import { useState } from 'react'
import './index.css'

export default function Chats() {
  const user = useUserData()
  const { signOut } = useSignOut()
  const [loading, setLoading] = useState(true)

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
      <div className="chat-area" style={{ position: "relative" }}>
        {loading && (
          <div className="loader-overlay">
            <div className="spinner"></div>
            <p className='para-1'>Loading chat...</p>
          </div>
        )}

        <iframe
          src="https://bollemsimhadri.app.n8n.cloud/webhook/c4b58d85-6bd8-4b04-b599-c5d55308f721/chat"
          title="AI Chatbot"
          style={{ width: "100%", height: "100%", border: "none" }}
          onLoad={() => setLoading(false)}
        />

      </div>
    </div>
  )
}

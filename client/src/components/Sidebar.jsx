
import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  // Function to handle logout
  const logout = () => {
    console.log("Logging out...");
    // Add actual logout functionality here
  };

  return (
    <>
      <div className="sidebar">
        <div className="logo">
          <img src="/logo-bitchat.png" alt="BitChat Logo" />
        </div>
        <nav className="menu">
          <Link to="/notifications" className="menu-item active">
            <img src="/bell-icon.png" alt="Notification" />
            <span>Notification</span>
          </Link>
          <Link to="/messages" className="menu-item">
            <img src="/Messages.png" alt="Messages" />
            <span>Messages</span>
          </Link>
          <Link to="/document" className="menu-item">
            <img src="/Documents.png" alt="Documents" />
            <span>Document</span>
          </Link>
        </nav>
        <div className="logout" onClick={logout}>
          <img src="/LogOut.png" alt="Log Out" />
          <span>Log out</span>
        </div>
      </div>
    </>
  );
}

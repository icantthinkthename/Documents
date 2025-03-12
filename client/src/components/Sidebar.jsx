import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="/logo-bitchat.png" alt="BitChat Logo" />
      </div>

      <nav className="sidebar-nav">
        <Link to="/notifications" className="nav-item">
          <div className="icon">
            <i className="notification-icon"></i>
          </div>
          <span>Notification</span>
        </Link>

        <Link to="/messages" className="nav-item active">
          <div className="icon">
            <i className="messages-icon"></i>
          </div>
          <span>Messages</span>
        </Link>

        <Link to="/documents" className="nav-item">
          <div className="icon">
            <i className="documents-icon"></i>
          </div>
          <span>Documents</span>
        </Link>
      </nav>

      <div className="log-out">
        <Link to="/logout" className="nav-item">
          <div className="icon">
            <i className="logout-icon"></i>
          </div>
          <span>Log out</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
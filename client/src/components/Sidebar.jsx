import React from 'react';
import { Link } from 'react-router-dom';
import { BellIcon, MessageSquareIcon, FileTextIcon, LogOutIcon } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="/bitchat-logo.png" alt="BitChat Logo" className="w-32 mx-auto" />
      </div>

      <div className="menu">
        <Link to="/notifications" className="menu-item">
          <BellIcon className="w-5 h-5 mr-3" />
          <span>Notification</span>
        </Link>

        <Link to="/messages" className="menu-item">
          <MessageSquareIcon className="w-5 h-5 mr-3" />
          <span>Messages</span>
        </Link>

        <Link to="/documents" className="menu-item">
          <FileTextIcon className="w-5 h-5 mr-3" />
          <span>Documents</span>
        </Link>
      </div>

      <div className="logout-container">
        <Link to="/logout" className="logout">
          <LogOutIcon className="w-5 h-5 mr-3" />
          <span>Log out</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
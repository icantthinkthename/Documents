
import React from "react";
import { Link } from "react-router-dom";
import { Bell, MessageSquare, FileText, LogOut } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen bg-[#0c2346] text-white w-64">
      {/* Logo */}
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold">
          BI<span className="text-sm align-top">T</span>
          <br />
          CHA<span className="text-sm align-top">T</span>
        </h1>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 flex flex-col gap-2 p-4">
        <NavItem to="/notifications" icon={<Bell />} label="Notification" />
        <NavItem to="/messages" icon={<MessageSquare />} label="Messages" />
        <NavItem to="/documents" icon={<FileText />} label="Document" />
      </div>

      {/* Log Out */}
      <div className="p-4">
        <NavItem to="/logout" icon={<LogOut />} label="Log out" />
      </div>
    </div>
  );
};

const NavItem = ({ 
  to, 
  icon, 
  label 
}: { 
  to: string; 
  icon: React.ReactNode; 
  label: string;
}) => {
  return (
    <Link
      to={to}
      className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#1c3c68] transition-colors"
    >
      <div className="text-white">{icon}</div>
      <span>{label}</span>
    </Link>
  );
};

export default Sidebar;

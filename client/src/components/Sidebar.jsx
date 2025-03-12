
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem
} from './ui/sidebar';

const AppSidebar = () => {
  return (
    <Sidebar className="h-screen" variant="sidebar" collapsible="none">
      <SidebarHeader className="p-4 flex items-center justify-center">
        <div className="text-white text-2xl font-bold">
          <img src="/logo-bitchat.png" alt="BitChat Logo" className="h-12" />
        </div>
      </SidebarHeader>
      <SidebarContent className="py-6">
        <SidebarMenu>
          <SidebarMenuItem className="mb-4">
            <Link to="/notification" className="flex items-center px-6 py-3 text-white hover:bg-blue-700 rounded-md">
              <span className="mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </span>
              <span className="text-lg">Notification</span>
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem className="mb-4">
            <Link to="/messages" className="flex items-center px-6 py-3 text-white bg-blue-700 rounded-md">
              <span className="mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </span>
              <span className="text-lg">Messages</span>
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem className="mb-4">
            <Link to="/documents" className="flex items-center px-6 py-3 text-white hover:bg-blue-700 rounded-md">
              <span className="mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              <span className="text-lg">Documents</span>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <Link to="/logout" className="flex items-center px-6 py-3 text-white hover:bg-blue-700 rounded-md">
          <span className="mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </span>
          <span className="text-lg">Log out</span>
        </Link>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;

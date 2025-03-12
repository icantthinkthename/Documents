import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import './index.css';

function ChatArea() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="mb-6">
          <div className="flex items-center mb-4">
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="border-b pb-2">
            <h2 className="text-lg font-semibold">History</h2>
          </div>

          <div className="py-3 border-b">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                <span className="text-gray-600">IT</span>
              </div>
              <div>
                <div className="font-medium">IT team</div>
                <div className="text-sm text-gray-500">2 hours ago</div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="bg-blue-600 text-white p-3 rounded-lg flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              <div>
                <div>New message</div>
                <div className="text-xs">Just now</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 p-4 bg-gray-50">
        <div className="bg-blue-100 p-4 rounded-lg mb-3">
          <p className="text-blue-800">Welcome to BitChat! How can I assist you today?</p>
        </div>

        <div className="bg-blue-100 p-4 rounded-lg mb-3">
          <p className="text-blue-800">What kind of assistance do you need?</p>
        </div>

        <div className="bg-blue-100 p-4 rounded-lg mb-3">
          <p className="text-blue-800">Please type a number:</p>
          <p className="text-blue-800">1. Benefits 2. Compensation 3. Leave and Holidays 4. Learning and Development</p>
        </div>

        <div className="mt-auto border-t pt-3">
          <div className="flex items-center">
            <input 
              type="text" 
              placeholder="Ask something..." 
              className="flex-1 p-2 border rounded-l-md"
            />
            <button className="bg-blue-500 text-white p-2 rounded-r-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-white">
        <div className="w-64 bg-blue-900">
          <Sidebar />
        </div>
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<ChatArea />} />
            <Route path="/messages" element={<ChatArea />} />
            <Route path="/notification" element={<div className="p-4">Notifications page</div>} />
            <Route path="/documents" element={<div className="p-4">Documents page</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
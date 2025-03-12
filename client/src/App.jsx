
import React from 'react'
import './index.css'

function App() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-[136px] bg-[#0c2340] text-white flex flex-col">
        <div className="p-4 mb-6">
          <h1 className="text-2xl font-bold">BIT<br/>CHAT</h1>
        </div>
        
        <nav className="flex-1">
          <ul>
            <li className="p-4 flex items-center">
              <span className="mr-2">🔔</span>
              <span>Notification</span>
            </li>
            <li className="p-4 flex items-center">
              <span className="mr-2">💬</span>
              <span>Messages</span>
            </li>
            <li className="p-4 bg-[#1a3c64] flex items-center">
              <span className="mr-2">📄</span>
              <span>Document</span>
            </li>
          </ul>
        </nav>
        
        <div className="p-4 mt-auto mb-4">
          <button className="flex items-center">
            <span className="mr-2">🚪</span>
            <span>Log out</span>
          </button>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-[#0c2340] rounded-full flex items-center justify-center text-white mr-4">
              <span className="text-2xl">📄</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Document</h2>
              <p className="text-gray-600">Fill the required fields below to apply</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <p className="mr-2">Hi! Sophia Carter</p>
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Profile" />
            </div>
          </div>
        </div>
        
        <div className="max-w-3xl">
          <div className="mb-6">
            <label className="block text-lg font-medium mb-2">Document Type</label>
            <div className="relative">
              <select className="w-full p-3 bg-[#e9edf4] rounded-lg appearance-none">
                <option>Select document type</option>
                <option>Vacation Request</option>
                <option>Expense Report</option>
                <option>Travel Request</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <span>▼</span>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-lg font-medium mb-2">Reason Details</label>
            <textarea className="w-full p-3 bg-[#e9edf4] rounded-lg h-32" placeholder="Enter details here..."></textarea>
          </div>
          
          <div className="mb-8">
            <label className="block text-lg font-medium mb-2">Attach handover document (pdf, jpg, docx)</label>
            <div className="flex">
              <button className="bg-[#0c2340] text-white py-3 px-6 rounded-lg mr-2">Choose File</button>
              <div className="flex-1 bg-[#e9edf4] rounded-lg"></div>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <button className="bg-[#3d6cb9] text-white py-3 px-12 rounded-lg">Submit</button>
            <button className="border border-red-500 text-red-500 py-3 px-12 rounded-lg">Reset</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

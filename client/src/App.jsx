import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import './index.css';

function App() {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  return (
    <Router>
      <div className="app-container">
        <Sidebar />

        {/* Top Section: Profile and Notification */}
        <div className="main-content">
          <div className="top-section">
            <div className="notification">
              <div className="icon">
                <img src="/bell-icon.png" alt="Bell Icon" />
              </div>
              <div className="text">Notification</div>
            </div>

            <div className="profile-container">
              <p className="greeting">Hi! <span className="sophia-name" onClick={toggleProfileDropdown}>Sophia Carter</span></p>
              <img src="/Sophia.png" alt="Sophia Carter" className="profile-img" onClick={toggleProfileDropdown} />
            </div>

            {/* Profile Dropdown (Initially Hidden) */}
            <div id="profileDropdown" className={`profile-dropdown ${showProfileDropdown ? 'show' : ''}`}>
              <div className="dropdown-content">
                <img src="/Sophia.png" alt="Profile" className="profile-pic" />
                <h3>Sophia Carter</h3>
                <p>UX/UI design</p>
                <p><strong>Employee ID:</strong> 511215551121</p>
              </div>
            </div>
          </div>

          {/* Button Section */}
          <div className="button-container">
            <div className="button-text">All</div>
            <div className="triicon">
              <img src="/tridown.png" alt="Tri Icon" />
            </div>
          </div>

          <Routes>
            <Route path="/" element={<div className="content-area">Notification Content Area</div>} />
            <Route path="/messages" element={<div className="content-area">Messages Content Area</div>} />
            <Route path="/document" element={
              <div className="content-area">
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

                  {/* Placeholder for profile section -  This section was already in original code */}
                  <div className="flex items-center">
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
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
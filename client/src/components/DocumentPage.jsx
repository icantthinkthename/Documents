
import React from 'react';

function DocumentPage() {
  return (
    <div className="p-8">
      <div className="flex items-center gap-5 mb-6">
        <div className="bg-blue-900 rounded-full p-4 flex items-center justify-center w-16 h-16">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
        </div>
        <div>
          <h1 className="text-3xl font-semibold text-blue-900">Document</h1>
          <p className="text-gray-600">Fill the required fields below to apply</p>
        </div>
      </div>

      <form className="mt-8 space-y-6">
        <div className="space-y-2">
          <label className="text-lg font-medium text-blue-900">Document Type</label>
          <select className="w-full px-4 py-3 bg-gray-100 rounded-md">
            <option value="" disabled selected>Select document type</option>
            <option value="resignation">Resignation Letter</option>
            <option value="leave">Leave Request</option>
            <option value="medical">Medical Certificate</option>
            <option value="expense">Expense Claim</option>
            <option value="appraisal">Performance Appraisal</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-lg font-medium text-blue-900">Reason Details</label>
          <textarea 
            className="w-full px-4 py-3 bg-gray-100 rounded-md"
            rows="4"
            placeholder="Enter details here">
          </textarea>
        </div>

        <div className="space-y-2">
          <label className="text-lg font-medium text-blue-900">Attach handover document (pdf, jpg, docx)</label>
          <div className="flex">
            <button className="px-4 py-2 bg-blue-900 text-white rounded-l-md">Choose File</button>
            <div className="flex-1 bg-gray-100 rounded-r-md flex items-center px-4">
              No file chosen
            </div>
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-md">Submit</button>
          <button type="reset" className="px-6 py-3 bg-white text-red-500 border border-red-500 rounded-md">Reset</button>
        </div>
      </form>
    </div>
  );
}

export default DocumentPage;

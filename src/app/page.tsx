"use client";
import { useState } from 'react';

export default function HomePage() {
  
  const [billFrom, setBillFrom] = useState({ 
    companyName: '', 
    address: '', 
    cityStateZip: '', 
    email: '' 
  });

  const [billTo, setBillTo] = useState({ 
    companyName: '', 
    address: '', 
    cityStateZip: '', 
    email: '' 
  });

  const [invoiceDetails, setInvoiceDetails] = useState({
    invoiceDate: '',
    dueDate: '',
    invoiceNumber: ''
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-10 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-semibold text-gray-900">Invoice Generator</h1>
          </div>
          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700">
              Download PDF
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="space-y-6">
          
          {/* Details Section */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Details</h2>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-2 gap-8">
                {/* From */}
                <div>
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-medium mr-3">
                      U
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Bill From:</h3>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <input 
                      type="text" 
                      placeholder="Company Name"
                      value={billFrom.companyName}
                      onChange={(e) => setBillFrom({...billFrom, companyName: e.target.value})}
                      className="w-full p-2 text-sm text-gray-900 border-0 border-b border-gray-200 focus:border-gray-400 focus:outline-none placeholder:text-gray-400"
                    />
                    <input 
                      type="text" 
                      placeholder="Address Line 1"
                      value={billFrom.address}
                      onChange={(e) => setBillFrom({...billFrom, address: e.target.value})}
                      className="w-full p-2 text-sm text-gray-900 border-0 border-b border-gray-200 focus:border-gray-400 focus:outline-none placeholder:text-gray-400"
                    />
                    <input 
                      type="text" 
                      placeholder="City, State ZIP"
                      value={billFrom.cityStateZip}
                      onChange={(e) => setBillFrom({...billFrom, cityStateZip: e.target.value})}
                      className="w-full p-2 text-sm text-gray-900 border-0 border-b border-gray-200 focus:border-gray-400 focus:outline-none placeholder:text-gray-400"
                    />
                    <input 
                      type="email" 
                      placeholder="email@company.com"
                      value={billFrom.email}
                      onChange={(e) => setBillFrom({...billFrom, email: e.target.value})}
                      className="w-full p-2 text-sm text-gray-900 border-0 border-b border-gray-200 focus:border-gray-400 focus:outline-none placeholder:text-gray-400"
                    />
                  </div>
                </div>
                
                {/* To */}
                <div>
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium mr-3">
                      C
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Bill To:</h3>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <input 
                      type="text" 
                      placeholder="Client Company Name"
                      value={billTo.companyName}
                      onChange={(e) => setBillTo({...billTo, companyName: e.target.value})}
                      className="w-full p-2 text-sm text-gray-900 border-0 border-b border-gray-200 focus:border-gray-400 focus:outline-none placeholder:text-gray-400"
                    />
                    <input 
                      type="text" 
                      placeholder="Address Line 1"
                      value={billTo.address}
                      onChange={(e) => setBillTo({...billTo, address: e.target.value})}
                      className="w-full p-2 text-sm text-gray-900 border-0 border-b border-gray-200 focus:border-gray-400 focus:outline-none placeholder:text-gray-400"
                    />
                    <input 
                      type="text" 
                      placeholder="City, State ZIP"
                      value={billTo.cityStateZip}
                      onChange={(e) => setBillTo({...billTo, cityStateZip: e.target.value})}
                      className="w-full p-2 text-sm text-gray-900 border-0 border-b border-gray-200 focus:border-gray-400 focus:outline-none placeholder:text-gray-400"
                    />
                    <input 
                      type="email" 
                      placeholder="client@email.com"
                      value={billTo.email}
                      onChange={(e) => setBillTo({...billTo, email: e.target.value})}
                      className="w-full p-2 text-sm text-gray-900 border-0 border-b border-gray-200 focus:border-gray-400 focus:outline-none placeholder:text-gray-400"
                    />
                  </div>
                </div>
              </div>

              {/* Invoice Info */}
              <div className="mt-8 grid grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Invoice Date</label>
                  <input 
                    type="date" 
                    value={invoiceDetails.invoiceDate}
                    onChange={(e) => setInvoiceDetails({...invoiceDetails, invoiceDate: e.target.value})}
                    className={`w-full p-2 border border-gray-300 rounded ${
                      invoiceDetails.invoiceDate ? 'text-gray-900' : 'text-gray-400'
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Due Date</label>
                  <input 
                    type="date" 
                    value={invoiceDetails.dueDate}
                    onChange={(e) => setInvoiceDetails({...invoiceDetails, dueDate: e.target.value})}
                    className={`w-full p-2 border border-gray-300 rounded ${
                      invoiceDetails.dueDate ? 'text-gray-900' : 'text-gray-400'
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1 text-gray-500">Invoice #</label>
                  <input 
                    type="text" 
                    placeholder="INV-001"
                    value={invoiceDetails.invoiceNumber}
                    onChange={(e) => setInvoiceDetails({...invoiceDetails, invoiceNumber: e.target.value})}
                    className="text-gray-900 w-full p-2 border border-gray-300 rounded placeholder:text-gray-400"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Items Section */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Items</h2>
            </div>
            
            <div className="p-6">
              {/* Table Header */}
              <div className="grid grid-cols-12 gap-4 mb-4 text-xs text-gray-500 uppercase tracking-wider">
                <div className="col-span-5">Description</div>
                <div className="col-span-2">Quantity</div>
                <div className="col-span-2">Price</div>
                <div className="col-span-2">Amount</div>
                <div className="col-span-1"></div>
              </div>
              
              {/* Line Item Row */}
              <div className="grid grid-cols-12 gap-4 items-center py-3 border-b border-gray-100">
                <div className="col-span-5">
                  <input 
                    type="text" 
                    placeholder="Item Description"
                    className="w-full p-2 border-0 focus:outline-none text-sm placeholder:text-gray-400"
                  />
                </div>
                <div className="col-span-2">
                  <input 
                    type="number" 
                    placeholder="1"
                    className="w-full p-2 border-0 focus:outline-none text-sm placeholder:text-gray-400"
                  />
                </div>
                <div className="col-span-2">
                  <input 
                    type="number" 
                    placeholder="0.00"
                    className="w-full p-2 border-0 focus:outline-none text-sm placeholder:text-gray-400"
                  />
                </div>
                <div className="col-span-2">
                  <span className="text-sm text-gray-400">$0.00</span>
                </div>
                <div className="col-span-1 flex justify-end">
                  <button className="text-red-500 text-sm font-medium px-3 py-3 rounded hover:bg-red-50">
                    Remove
                  </button>
                </div>
              </div>
              
              {/* Add Item Button */}
              <button className="w-full mt-4 py-3 text-sm text-blue-600 hover:bg-blue-50 rounded">
                + New Item
              </button>
              
              {/* Total */}
              <div className="mt-6 pt-4 border-t border-gray-200 text-right">
                <div className="text-lg font-semibold text-gray-500">Total: $0.00</div>
              </div>
            </div>
          </div>

          {/* Notes Section */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Invoice Notes</h2>
            </div>
            <div className="p-6">
              <textarea 
                rows={4}
                placeholder="Add any special terms, payment instructions, or additional notes for this Invoice..."
                className="w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none resize-none placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Invoice Preview Section */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Invoice Preview</h2>
            </div>
            <div className="p-6">
              <div className="bg-gray-50 rounded-lg p-6 min-h-64">
                <div className="text-center text-gray-500 py-8">
                  <div className="text-lg font-medium mb-2">Preview will appear here</div>
                  <div className="text-sm">Fill out the form above to see your Invoice Preview</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
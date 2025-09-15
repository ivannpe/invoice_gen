import { BillingInfo, InvoiceInfo } from '../types';

interface InvoiceDetailsProps {
    billFrom: BillingInfo;
    billTo: BillingInfo;
    setBillFrom: (info: BillingInfo) => void;
    setBillTo: (info: BillingInfo) => void;
    invoiceDetails: InvoiceInfo;
    setInvoiceDetails: (details: InvoiceInfo) => void;
}

export default function InvoiceDetails({
    billFrom, 
    billTo,
    setBillFrom,
    setBillTo,
    invoiceDetails,
    setInvoiceDetails
}: InvoiceDetailsProps) {
    return (
        <div className="bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Details</h2>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-2 gap-8">
                {/* From */}
                <div>
                  <div className="flex items-center mb-3">
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

    );
}
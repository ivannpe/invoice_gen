import { BillingInfo, InvoiceInfo, LineItem } from "../types";
interface InvoicePreviewProps {
    billFrom: BillingInfo;
    billTo: BillingInfo;
    invoiceDetails: InvoiceInfo;
    lineItems: LineItem[];
    notes: string;
    calculateLineAmount: (item: LineItem) => string;
    total: string;
}

export default function InvoicePreview({
    billFrom,
    billTo,
    invoiceDetails,
    lineItems,
    notes,
    calculateLineAmount,
    total
}: InvoicePreviewProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">Invoice Preview</h2>
      </div>
      <div className="p-6">
        <div id="invoice-preview" className="bg-white rounded-lg p-8 min-h-64 border">
            {/* Invoice Header */}
            <div className="flex justify-between items-start mb-8">
                <div>
                <h1 className="text-3xl font-bold text-gray-900">INVOICE</h1>
                <p className="text-gray-600">#{invoiceDetails.invoiceNumber || 'INV-001'}</p>
                </div>
                <div className="text-right">
                <p className="text-sm text-gray-600">Invoice Date: {invoiceDetails.invoiceDate || 'Not set'}</p>
                <p className="text-sm text-gray-600">Due Date: {invoiceDetails.dueDate || 'Not set'}</p>
                </div>
            </div>

            {/* Bill From/To */}
            <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                <h3 className="font-semibold text-gray-900 mb-2">From:</h3>
                <div className="text-sm text-gray-700">
                    <p>{billFrom.companyName || 'Company Name'}</p>
                    <p>{billFrom.address}</p>
                    <p>{billFrom.cityStateZip}</p>
                    <p>{billFrom.email}</p>
                </div>
                </div>
                <div>
                <h3 className="font-semibold text-gray-900 mb-2">To:</h3>
                <div className="text-sm text-gray-700">
                    <p>{billTo.companyName || 'Client Company'}</p>
                    <p>{billTo.address}</p>
                    <p>{billTo.cityStateZip}</p>
                    <p>{billTo.email}</p>
                </div>
                </div>
            </div>

            {/* Line Items Table */}
            <div className="mb-8">
                <table className="w-full">
                <thead>
                    <tr className="border-b border-gray-300 ">
                    <th className="text-left py-2 text-gray-900 font-semibold">Description</th>
                    <th className="text-center py-2 text-gray-900 font-semibold">Qty</th>
                    <th className="text-right py-2 text-gray-900 font-semibold">Price</th>
                    <th className="text-right py-2 text-gray-900 font-semibold">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {lineItems.map((item) => (
                    <tr key={item.id} className="border-b border-gray-100">
                        <td className="py-2 text-gray-900">{item.description || 'Item description'}</td>
                        <td className="text-center py-2 text-gray-900">{item.quantity || '1'}</td>
                        <td className="text-right py-2 text-gray-900">${item.price || '0.00'}</td>
                        <td className="text-right py-2 text-gray-900">
                            ${calculateLineAmount(item)}
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>

            {/* Total */}
            <div className="flex justify-end mb-8">
                <div className="text-right">
                <div className="text-xl font-bold text-gray-900">
                    Total: ${total}
                </div>
                </div>
            </div>

            {/* Notes */}
            {notes && (
                <div>
                <h3 className="font-semibold text-gray-900 mb-2">Notes:</h3>
                <p className="text-sm text-gray-700 whitespace-pre-line">{notes}</p>
                </div>
            )}
            </div>
      </div>
    </div>
  );
}
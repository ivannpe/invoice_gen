interface InvoiceHeaderProps {
    onDownloadPDF: () => void;
}

export default function InvoiceHeader({ onDownloadPDF }: InvoiceHeaderProps) {
    return (
        <div className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-10 shadow-sm">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <h1 className="text-xl font-semibold text-gray-900">Invoice Generator</h1>
                </div>
            <div className="flex items-center space-x-3">
                <button 
                    onClick={onDownloadPDF}
                    className="px-4 py-2 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700"
                >
                    Download PDF
                </button>
            </div>
            </div>
        </div>
    );
}
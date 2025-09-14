interface InvoicePreviewProps {
}

export default function InvoicePreview({}: InvoicePreviewProps) {
  return (
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
  );
}
interface InvoiceNotesProps {
    notes: string;
    setNotes: (notes: string) => void;
}

export default function InvoiceNotes({ notes, setNotes}: InvoiceNotesProps) {
    return (
        <div className="bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Invoice Notes</h2>
            </div>
            <div className="p-6">
              <textarea 
                rows={4}
                placeholder="Add any special terms, payment instructions, or additional notes for this Invoice..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none resize-none text-gray-900 placeholder:text-gray-400"
              />
            </div>
          </div>
    );
}
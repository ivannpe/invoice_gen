import { LineItem } from '../types';

interface InvoiceItemsProps {
    lineItems: LineItem[];
    setLineItems: (items: LineItem[]) => void;
}

export default function InvoiceItems({lineItems, setLineItems}: InvoiceItemsProps) {

    const calculateLineAmount = (item: LineItem): string => {
        const quantity = Number(item.quantity) || 0;
        const price = Number(item.price) || 0;
        return (quantity * price).toFixed(2);
    };

    const calculateTotal = (): string => {
        return lineItems.reduce((sum, item) => {
        return sum + Number(calculateLineAmount(item));
        }, 0).toFixed(2);
    };

    const addLineItem = (): void => {
        const newId = lineItems.length > 0 ? Math.max(...lineItems.map(item => item.id)) + 1 : 1;
        setLineItems([...lineItems, { 
        id: newId, 
        description: '', 
        quantity: '', 
        price: '' 
        }]);
    };

    const removeLineItem = (id: number): void => {
        if (lineItems.length > 1) {
        setLineItems(lineItems.filter(item => item.id !== id));
        }
    };

    return (
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
              
              {/* Line Items */}
              {lineItems.map((item, index) => (
                <div key={item.id} className="grid grid-cols-12 gap-4 items-center py-3 border-b border-gray-100">
                  <div className="col-span-5">
                    <input 
                      type="text" 
                      placeholder="Item Description"
                      value={item.description}
                      onChange={(e) => {
                        const newItems = [...lineItems];
                        newItems[index].description = e.target.value;
                        setLineItems(newItems);
                      }}
                      className="w-full p-2 border-0 focus:outline-none text-sm text-gray-900 placeholder:text-gray-400"
                    />
                  </div>
                  <div className="col-span-2">
                    <input 
                      type="number" 
                      placeholder="1"
                      value={item.quantity}
                      onChange={(e) => {
                        const newItems = [...lineItems];
                        newItems[index].quantity = e.target.value;
                        setLineItems(newItems);
                      }}
                      className="w-full p-2 border-0 focus:outline-none text-sm text-gray-900 placeholder:text-gray-400"
                    />
                  </div>
                  <div className="col-span-2">
                    <input 
                      type="number" 
                      placeholder="0.00"
                      step="0.01"
                      value={item.price}
                      onChange={(e) => {
                        const newItems = [...lineItems];
                        newItems[index].price = e.target.value;
                        setLineItems(newItems);
                      }}
                      className="w-full p-2 border-0 focus:outline-none text-sm text-gray-900 placeholder:text-gray-400"
                    />
                  </div>
                  <div className="col-span-2">
                    <span className={`text-sm ${
                      Number(calculateLineAmount(item)) > 0 ? 'text-gray-900' : 'text-gray-400'
                    }`}>
                      ${calculateLineAmount(item)}
                    </span>
                  </div>
                  <div className="col-span-1 flex justify-end">
                    <button 
                      onClick={() => removeLineItem(item.id)}
                      className="text-red-500 text-sm font-medium px-3 py-3 rounded hover:bg-red-50"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              
              {/* Add Item Button */}
              <button 
                onClick={addLineItem}
                className="w-full mt-4 py-3 text-sm text-blue-600 hover:bg-blue-50 rounded">
                + New Item
              </button>
              
              {/* Total */}
              <div className={`mt-6 pt-4 border-t border-gray-200 text-right text-lg font-semibold ${
                Number(calculateTotal()) > 0 ? 'text-gray-900' : 'text-gray-500'
              }`}>
                Total: ${calculateTotal()}
              </div>
            </div>
          </div>

    );
}
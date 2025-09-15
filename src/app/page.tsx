"use client";
import { useState } from 'react';

import { LineItem, BillingInfo, InvoiceInfo } from '../types';

import InvoiceHeader from '../components/InvoiceHeader';
import InvoiceDetails from '../components/InvoiceDetails';
import InvoiceItems from '../components/InvoiceItems';
import InvoiceNotes from '../components/InvoiceNotes';
import InvoicePreview from '../components/InvoicePreview';

export default function HomePage() {

  const [billFrom, setBillFrom] = useState<BillingInfo>({ 
    companyName: '', 
    address: '', 
    cityStateZip: '', 
    email: '' 
  });

  const [billTo, setBillTo] = useState<BillingInfo>({ 
    companyName: '', 
    address: '', 
    cityStateZip: '', 
    email: '' 
  });

  const [invoiceDetails, setInvoiceDetails] = useState<InvoiceInfo>({
    invoiceDate: '',
    dueDate: '',
    invoiceNumber: ''
  });

  const [lineItems, setLineItems] = useState<LineItem[]>([
    { id: 1, description: '', quantity: '', price: '' }
  ]);

  const [notes, setNotes] = useState('');

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



  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <InvoiceHeader 
        billFrom={billFrom}
        billTo={billTo}
        invoiceDetails={invoiceDetails}
        lineItems={lineItems}
        notes={notes}
        total={calculateTotal()}
      />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="space-y-6">
          
          {/* Details Section */}
          <InvoiceDetails
            billFrom={billFrom}
            billTo={billTo}
            setBillFrom={setBillFrom}
            setBillTo={setBillTo}
            invoiceDetails={invoiceDetails}
            setInvoiceDetails={setInvoiceDetails}
          />

          {/* Items Section */}
          <InvoiceItems
            lineItems={lineItems}
            setLineItems={setLineItems}
            calculateLineAmount={calculateLineAmount}
            calculateTotal={calculateTotal}
          />

          {/* Notes Section */}
          <InvoiceNotes 
            notes={notes}
            setNotes={setNotes}
          />

          {/* Invoice Preview Section */}
          <InvoicePreview 
            billFrom={billFrom}
            billTo={billTo}
            invoiceDetails={invoiceDetails}
            lineItems={lineItems}
            notes={notes}
            calculateLineAmount={calculateLineAmount}
            total={calculateTotal()}
          />
        </div>
      </div>
    </div>
  );
}
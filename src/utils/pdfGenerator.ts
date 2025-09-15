import { BillingInfo, InvoiceInfo, LineItem } from '../types';

interface InvoiceData {
  billFrom: BillingInfo;
  billTo: BillingInfo;
  invoiceDetails: InvoiceInfo;
  lineItems: LineItem[];
  notes: string;
  total: string;
}

export const generateInvoicePDF = async (data: InvoiceData) => {
  try {
    const response = await fetch('/api/generate-pdf', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to generate PDF');
    }

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${data.invoiceDetails.invoiceNumber || 'invoice-draft'}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

  } catch (error) {
    console.error('PDF generation failed:', error);
    alert('Failed to generate PDF. Please try again.');
  }
};
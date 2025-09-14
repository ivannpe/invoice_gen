export interface LineItem {
  id: number;
  description: string;
  quantity: string;
  price: string;
}

export interface BillingInfo {
  companyName: string;
  address: string;
  cityStateZip: string;
  email: string;
}

export interface InvoiceInfo {
  invoiceDate: string;
  dueDate: string;
  invoiceNumber: string;
}
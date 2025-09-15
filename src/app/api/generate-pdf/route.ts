import { NextRequest, NextResponse } from 'next/server';
import { BillingInfo, InvoiceInfo, LineItem } from '../../../types';
import puppeteer from 'puppeteer';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    const browser = await puppeteer.launch({ 
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    
    await page.setContent(generateInvoiceHTML(data), { waitUntil: 'networkidle0' });
    const pdf = await page.pdf({ 
      format: 'A4',
      printBackground: true,
      margin: { top: '20px', bottom: '20px', left: '20px', right: '20px' }
    });
    
    await browser.close();
    
    return new NextResponse(pdf, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${data.invoiceDetails.invoiceNumber || 'invoice-draft'}.pdf"`
      }
    });
    
  } catch (error) {
    console.error('PDF generation failed:', error);
    return NextResponse.json({ error: 'Failed to generate PDF' }, { status: 500 });
  }
}

function generateInvoiceHTML(data: {
  billFrom: BillingInfo;
  billTo: BillingInfo;
  invoiceDetails: InvoiceInfo;
  lineItems: LineItem[];
  notes: string;
  total: string;
}) {
  const formatDate = (dateStr: string) => dateStr || 'Not set';
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Invoice</title>
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-white p-8">
      <div class="max-w-4xl mx-auto">
        <div class="flex justify-between items-start mb-8">
          <div>
            <h1 class="text-3xl font-bold text-gray-900">INVOICE</h1>
            <p class="text-gray-600">#${data.invoiceDetails.invoiceNumber || 'INV-001'}</p>
          </div>
          <div class="text-right text-sm text-gray-600">
            <p>Invoice Date: ${formatDate(data.invoiceDetails.invoiceDate)}</p>
            <p>Due Date: ${formatDate(data.invoiceDetails.dueDate)}</p>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-8 mb-8">
          <div>
            <h3 class="font-semibold text-gray-900 mb-2">From:</h3>
            <div class="text-sm text-gray-700">
              <p>${data.billFrom.companyName || ''}</p>
              <p>${data.billFrom.address || ''}</p>
              <p>${data.billFrom.cityStateZip || ''}</p>
              <p>${data.billFrom.email || ''}</p>
            </div>
          </div>
          <div>
            <h3 class="font-semibold text-gray-900 mb-2">To:</h3>
            <div class="text-sm text-gray-700">
              <p>${data.billTo.companyName || ''}</p>
              <p>${data.billTo.address || ''}</p>
              <p>${data.billTo.cityStateZip || ''}</p>
              <p>${data.billTo.email || ''}</p>
            </div>
          </div>
        </div>

        <div class="mb-8">
          <table class="w-full">
            <thead>
              <tr class="border-b border-gray-300">
                <th class="text-left py-2 font-semibold">Description</th>
                <th class="text-center py-2 font-semibold">Qty</th>
                <th class="text-right py-2 font-semibold">Price</th>
                <th class="text-right py-2 font-semibold">Amount</th>
              </tr>
            </thead>
            <tbody>
              ${data.lineItems.map(item => `
                <tr class="border-b border-gray-100">
                  <td class="py-2 text-gray-900">${item.description || ''}</td>
                  <td class="text-center py-2 text-gray-900">${item.quantity || ''}</td>
                  <td class="text-right py-2 text-gray-900">$${item.price || '0.00'}</td>
                  <td class="text-right py-2 text-gray-900">
                    $${((Number(item.quantity) || 0) * (Number(item.price) || 0)).toFixed(2)}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <div class="flex justify-end mb-8">
          <div class="text-xl font-bold text-gray-900">
            Total: $${data.total}
          </div>
        </div>

        ${data.notes ? `
          <div>
            <h3 class="font-semibold text-gray-900 mb-2">Notes:</h3>
            <p class="text-sm text-gray-700">${data.notes}</p>
          </div>
        ` : ''}
      </div>
    </body>
    </html>
  `;
}
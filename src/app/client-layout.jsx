'use client';
import { useState } from 'react';
import { InvoiceContext } from '@/context/invoice-context';
import DATA from '@/../public/data.json';

export default function ClientLayout({ children }) {
  const statuses = ['pending', 'paid', 'Draft'];
  const [selectedStatuses, setSelectedStatuses] = useState(null);
  const [invoice, setInvoice] = useState(null);
  const [invoices, setInvoices] = useState(DATA);
  const updateInvoice = (inv) => {
    const newInvoice = { ...invoice, ...inv };

    console.log('debug - newInvoice', newInvoice);

    setInvoice(newInvoice);
    setInvoices(
      invoices.map((inv) => (inv.id === invoice.id ? newInvoice : inv))
    );
  };

  return (
    <InvoiceContext.Provider
      value={{
        invoices,
        invoice,
        setInvoice,
        setInvoices,
        statuses,
        selectedStatuses,
        setSelectedStatuses,
        updateInvoice,
      }}
    >
      {children}
    </InvoiceContext.Provider>
  );
}

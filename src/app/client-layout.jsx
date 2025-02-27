'use client';
import { useState } from 'react';
import { InvoiceContext } from '@/context/invoice-context';
import DATA from '@/../public/data.json';

export default function ClientLayout({ children }) {
  const statuses = ['pending', 'paid', 'draft'];
  const [selectedStatuses, setSelectedStatuses] = useState([
    'pending',
    'paid',
    'draft',
  ]);
  const [invoice, setInvoice] = useState(null);
  const [invoices, setInvoices] = useState(DATA);
  const addInvoice = (inv) => {
    const generateId = () => {
      const chars =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let id = '';
      for (let i = 0; i < 6; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return id;
    };

    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${String(
      today.getMonth() + 1
    ).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

    const newInvoice = {
      ...inv,
      id: generateId().toUpperCase(),
      createdAt: formattedDate,
    };
    setInvoices((invoices) => [newInvoice, ...invoices]);
  };

  const markAsPaid = (inv) => {
    const paidInvoice = { ...invoice, status: 'paid' };
    setInvoice(paidInvoice);
    setInvoices(
      invoices.map((inv) => (inv.id === invoice.id ? paidInvoice : inv))
    );
  };

  const updateInvoice = (inv) => {
    const newInvoice = { ...invoice, ...inv };

    setInvoice(newInvoice);
    setInvoices(
      invoices.map((inv) => (inv.id === invoice.id ? newInvoice : inv))
    );
  };

  const deleteInvoice = (inv) => {
    setInvoices(invoices.filter((inv) => inv.id !== invoice.id));
    setInvoice(null);
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
        addInvoice,
        updateInvoice,
        deleteInvoice,
        markAsPaid,
      }}
    >
      {children}
    </InvoiceContext.Provider>
  );
}

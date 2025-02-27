import { createContext } from 'react';

export const InvoiceContext = createContext({
  invoices: [],
  invoice: null,
  setInvoice: () => {},
  setInvoices: () => {},
  selectedStatuses: [],
  statuses: [],
  selectedStatuses: [],
  invoice: null,
  setSelectedStatuses: () => {},
  updateInvoice: (invoice) => {},
  addInvoice: (invoice) => {},
  deleteInvoice: (invoice) => {},
  markAsPaid: (invoice) => {},
});

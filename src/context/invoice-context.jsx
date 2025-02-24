import { createContext } from 'react';

export const InvoiceContext = createContext({
  statuses: [],
  selectedStatuses: [],
  invoice: null,
  setSelectedStatuses: () => {},
});

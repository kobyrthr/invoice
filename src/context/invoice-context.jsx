import { createContext } from 'react';

export const InvoiceContext = createContext({
  statuses: [],
  selectedStatus: null,
  setSelectedStatus: () => {},
});

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";

import { router } from './Routers/Router';
import InvoiceProvider from './context/InvoiceProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthProvider from './Providers/AuthProvider';
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <InvoiceProvider>
          <RouterProvider router={router} />
        </InvoiceProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
)

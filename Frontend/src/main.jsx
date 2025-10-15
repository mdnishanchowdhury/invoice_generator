import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";

import { router } from './Routers/Router';
import InvoiceProvider from './context/InvoiceProvider';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InvoiceProvider>
      <RouterProvider router={router} />
    </InvoiceProvider>
  </StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider
} from "react-router-dom";
import { router } from './Routes/Routes';
import AuthProvider from './providers/AuthProvider';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import ThemeProviderr from './hooks/ThemeProviderr';
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProviderr>
          <div className='bg-white'>
            <RouterProvider router={router} />
          </div>
        </ThemeProviderr>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)

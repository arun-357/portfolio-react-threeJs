/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.VITE_SERVICE_ID':JSON.stringify(process.env.VITE_SERVICE_ID),
    'process.env.VITE_TEMPLATE_ID':JSON.stringify(process.env.VITE_TEMPLATE_ID),
    'process.env.VITE_TO_EMAIL':JSON.stringify(process.env.VITE_TO_EMAIL),
    'process.env.VITE_EMAIL_KEY':JSON.stringify(process.env.VITE_EMAIL_KEY)
  }
})

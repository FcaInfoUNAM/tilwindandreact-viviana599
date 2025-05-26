import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // agrega esta linea
export default defineConfig({
  plugins: [
    tailwindcss(),react()// agrega tailwind al array de plugings
  ],
})


// https://vite.dev/confi g/ 

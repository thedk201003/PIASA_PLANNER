//import { defineConfig } from 'vite'
//import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
//export default defineConfig({
 // plugins: [react()],
  //base: './',
//})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  esbuild: {
    loader: 'jsx',  // Ensure JSX files are handled correctly
    include: /\.jsx$/,  // Apply the JSX loader only to `.jsx` files
  },
})

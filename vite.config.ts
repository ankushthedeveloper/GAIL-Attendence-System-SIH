import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['prop-types'],
  },
  build: {
    rollupOptions: {
      external: ['leaflet-control-geocoder']
    }
  }
})

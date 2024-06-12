import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  /** Deploy vercel thi ko can base */
  //base: "/react-vite-shadcn-ui",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

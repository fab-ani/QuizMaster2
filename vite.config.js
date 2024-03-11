import { defineConfig,loadEnv } from 'vite'
import react from '@vitejs/plugin-react'


export default ({ mode }) =>{
  const env = loadEnv(mode, process.cwd());
  // https://vitejs.dev/config/
 return defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.JPG"],
  define: {
    'process.env':process.env,
  },
   esbuild: {
    supported: {
      'top-level-await': true //browsers can handle top-level-await features
    },
  },
  build: {
    chunkSizeWarningLimit: 1600,
  },
})}

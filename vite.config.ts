import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: chunkInfo => {
          if (chunkInfo.isDynamicEntry) {
            // const hash = createHash('md5')
            //   .update(Object.values(chunkInfo.modules).map(m => m.code).join())
            //   .digest('hex')
            //   .substr(0, 6)
            return 'assets/[name]'+ '.js'
          } else {
            return 'assets/[name].js'
          }
        }
      }
    }
  }
})

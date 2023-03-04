
import { defineConfig } from "vite"
import vpc from "vite-plugin-cloudflare"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [
    react({}),
    vpc({ 
      scriptPath: "./worker.js",
      miniflare: { modules: true }
    }),
  ],
})


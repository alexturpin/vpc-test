import express from "express"
import { createServer as createViteServer } from "vite"

const createServer = async () => {
  const app = express()

  const vite = await createViteServer({
    server: { middlewareMode: true },
  })

  app.use(vite.middlewares)

  app.listen(3000)
}

createServer()
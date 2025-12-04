import { createStartHandler, StartServer } from '@tanstack/start/server'
import { createRouter } from './router'

export default createStartHandler({
  createRouter,
  getRouterManifest: async () => {
    return { routes: {} } // Placeholder until generation works
  },
})

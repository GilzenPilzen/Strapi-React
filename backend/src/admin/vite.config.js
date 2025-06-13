import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    allowedHosts: [
      'strapi-react-production.up.railway.app',
      // voeg hier eventueel andere toegestane hosts toe
    ],
  },
});
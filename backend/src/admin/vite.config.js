// ✅ Correct — exporteer een functie
import { defineConfig, mergeConfig } from 'vite';

export default (config) => {
  return mergeConfig(config, defineConfig({
    server: {
        port: 3000,
        allowedHosts: [
            'strapi-react-production.up.railway.app',
        ],
    },
  }));
};

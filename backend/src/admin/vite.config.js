// ✅ Correct — exporteer een functie
import { defineConfig, mergeConfig } from 'vite';

export default (config) => {
  return mergeConfig(config, defineConfig({
    server: {
      allowedHosts: [
        'strapi-react-production.up.railway.app',
      ],
    },
  }));
};

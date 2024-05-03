import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      noExternal: ['swiper'],
    }
  },
  prefetch: true,
  integrations: [tailwind({
    applyBaseStyles: false,
  }), icon(), react()]
});
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const manifestForPlugin = {
  registerType: "prompt",
  includeAssets: [
    "favicon.svg",
    "favicon.ico",
    "robots.txt",
    "apple-touch-icon.png",
  ],
  manifest: {
    name: "HackerWeb",
    short_name: "HackerWeb",
    start_url: ".",
    display: "standalone",
    background_color: "#fff",
    description: "A readable Hacker News app.",
    icons: [
      {
        src: "./src/assets/48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "./src/assets/72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        src: "./src/assets/96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "./src/assets/48.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        src: "./src/assets/168.png",
        sizes: "168x168",
        type: "image/png",
      },
      {
        src: "./src/assets/192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    related_applications: [
      {
        platform: "play",
        url: "https://play.google.com/store/apps/details?id=cheeaun.hackerweb",
      },
    ],
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)],
});

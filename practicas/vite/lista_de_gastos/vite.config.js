// HE AÑADIDO EL PLUGIN VITE-PLUGGIN.SVGR

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Lo importo
import svgr from "vite-plugin-svgr";

// Lo añado a los plugins exportados
export default defineConfig({
  plugins: [react(), svgr()],
});

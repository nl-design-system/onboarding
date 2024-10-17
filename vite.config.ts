import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const BASE_URL = (process as never) && process.env["BASE_URL"];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: BASE_URL || "/",
});

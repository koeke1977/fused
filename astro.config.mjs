import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  site: "https://www.electrafest.be",
  trailingSlash: "always",
});

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || "ulj7mtyd";
const dataset = process.env.SANITY_STUDIO_DATASET || "production";

export default defineConfig({
  name: "fused",
  title: "FUSED – Projectbeheer",
  projectId,
  dataset,
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
});
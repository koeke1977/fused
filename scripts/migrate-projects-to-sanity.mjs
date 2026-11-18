import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { createClient } from "@sanity/client";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || "ulj7mtyd";
const dataset = process.env.SANITY_STUDIO_DATASET || "production";
const token = process.env.SANITY_API_TOKEN;

if (!token) {
  throw new Error("SANITY_API_TOKEN ontbreekt. Gebruik een Sanity-token met write-toegang; zet het token niet in Git.");
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2026-11-18",
  token,
  useCdn: false,
});

const projects = [
  {
    _id: "project-residentiele-nieuwbouw-elektriciteit",
    _type: "project",
    title: "Residentiële nieuwbouw",
    slug: { _type: "slug", current: "residentiele-nieuwbouw-elektriciteit" },
    category: "Elektriciteitswerken",
    summary: "Volledige elektrische installatie en bekabeling van een nieuwbouwwoning.",
    description: "Fused stond in voor de elektrische installatie en bekabeling van deze residentiële nieuwbouwwoning. De woning beschikt ook over zonnepanelen en een warmtepomp; deze installaties werden niet door Fused geplaatst.",
    coverImageAlt: "Elektrische verdeelkast in een residentiële nieuwbouwwoning",
    featured: true,
  },
  {
    _id: "project-residentiele-domotica-niko-home-control",
    _type: "project",
    title: "Residentiële domotica",
    slug: { _type: "slug", current: "residentiele-domotica-niko-home-control" },
    category: "Domotica / Smart Home",
    summary: "Een residentiële domotica-installatie op basis van Niko Home Control.",
    description: "Een residentieel project met Niko Home Control. De installatie brengt de verschillende elektrische functies samen in een overzichtelijk opgebouwde verdeelkast.",
    coverImageAlt: "Verdeelkast met Niko Home Control domoticamodules",
    featured: true,
  },
];

const imageFiles = [
  "project-residential-board.webp",
  "project-smart-home.webp",
];

for (let index = 0; index < projects.length; index += 1) {
  const project = projects[index];
  const imagePath = resolve("public/images", imageFiles[index]);
  const image = await readFile(imagePath);
  const asset = await client.assets.upload("image", image, {
    filename: imageFiles[index],
    contentType: "image/webp",
  });

  await client.createOrReplace({
    ...project,
    coverImage: {
      _type: "image",
      asset: { _type: "reference", _ref: asset._id },
    },
  });

  console.log(`Gemigreerd: ${project.title}`);
}

console.log("Klaar. Beide projecten staan als gepubliceerde documenten in Sanity.");

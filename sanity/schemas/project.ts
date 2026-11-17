import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Titel", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "URL-slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: (rule) => rule.required() }),
    defineField({ name: "category", title: "Categorie", type: "reference", to: [{ type: "service" }], validation: (rule) => rule.required() }),
    defineField({ name: "summary", title: "Korte omschrijving", type: "text", rows: 3, validation: (rule) => rule.required() }),
    defineField({ name: "description", title: "Projectomschrijving", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "coverImage", title: "Hoofdfoto", type: "image", options: { hotspot: true }, validation: (rule) => rule.required() }),
    defineField({ name: "gallery", title: "Extra foto's", type: "array", of: [{ type: "image", options: { hotspot: true } }] }),
    defineField({ name: "featured", title: "In de kijker", type: "boolean", initialValue: false }),
    defineField({ name: "publishedAt", title: "Publicatiedatum", type: "datetime" }),
  ],
  preview: { select: { title: "title", media: "coverImage", subtitle: "summary" } },
});

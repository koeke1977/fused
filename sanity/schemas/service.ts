import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Dienst",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Naam", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "URL-slug", type: "slug", options: { source: "title" }, validation: (rule) => rule.required() }),
    defineField({ name: "summary", title: "Korte omschrijving", type: "text", rows: 3, validation: (rule) => rule.required() }),
    defineField({ name: "description", title: "Omschrijving", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "sortOrder", title: "Volgorde", type: "number", initialValue: 0 }),
  ],
  preview: { select: { title: "title", subtitle: "summary" } },
});

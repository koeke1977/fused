import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Dienst",
  type: "document",
  groups: [
    { name: "content", title: "Inhoud", default: true },
    { name: "display", title: "Weergave" },
  ],
  fields: [
    defineField({ name: "title", title: "Naam", type: "string", group: "content", validation: (rule) => rule.required().max(80) }),
    defineField({ name: "slug", title: "URL-slug", type: "slug", group: "content", options: { source: "title", maxLength: 96 }, validation: (rule) => rule.required() }),
    defineField({ name: "summary", title: "Korte omschrijving", type: "text", rows: 3, group: "content", validation: (rule) => rule.required().max(220) }),
    defineField({ name: "detailsTitle", title: "Titel extra informatie", type: "string", group: "content" }),
    defineField({ name: "details", title: "Punten / werkzaamheden", type: "array", group: "content", of: [{ type: "string" }] }),
    defineField({ name: "sortOrder", title: "Volgorde", type: "number", group: "display", initialValue: 0, validation: (rule) => rule.integer() }),
    defineField({ name: "isVisible", title: "Tonen op website", type: "boolean", group: "display", initialValue: true }),
  ],
  preview: { select: { title: "title", subtitle: "summary" } },
  orderings: [{ title: "Volgorde op website", name: "sortOrderAsc", by: [{ field: "sortOrder", direction: "asc" }] }],
});

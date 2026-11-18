import { defineField, defineType } from "sanity";

const projectCategories = [
  { title: "Elektriciteitswerken", value: "Elektriciteitswerken" },
  { title: "Domotica / Smart Home", value: "Domotica / Smart Home" },
  { title: "Verlichting", value: "Verlichting" },
  { title: "Industriële installaties", value: "Industriële installaties" },
];

export const project = defineType({
  name: "project",
  title: "Realisatie",
  type: "document",
  groups: [
    { name: "content", title: "Projectinhoud", default: true },
    { name: "media", title: "Foto's" },
    { name: "display", title: "Weergave" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Projecttitel",
      type: "string",
      group: "content",
      validation: (rule) => rule.required().max(90),
    }),
    defineField({
      name: "slug",
      title: "Webadres",
      type: "slug",
      group: "content",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Categorie",
      type: "string",
      group: "content",
      options: { list: projectCategories, layout: "dropdown" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "summary",
      title: "Korte omschrijving",
      description: "Eén korte intro voor de projectkaart en de projectpagina.",
      type: "text",
      rows: 3,
      group: "content",
      validation: (rule) => rule.required().max(220),
    }),
    defineField({
      name: "description",
      title: "Projectomschrijving",
      description: "Beschrijf wat FUSED in dit project heeft uitgevoerd. Vermeld geen werken van derden als eigen realisatie.",
      type: "text",
      rows: 8,
      group: "content",
    }),
    defineField({
      name: "coverImage",
      title: "Hoofdfoto",
      type: "image",
      group: "media",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "coverImageAlt",
      title: "Alternatieve tekst hoofdfoto",
      description: "Beschrijf wat op de foto te zien is. Dit is belangrijk voor toegankelijkheid en SEO.",
      type: "string",
      group: "media",
      validation: (rule) => rule.required().max(160),
    }),
    defineField({
      name: "gallery",
      title: "Extra projectfoto's",
      type: "array",
      group: "media",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alternatieve tekst",
              type: "string",
              validation: (rule) => rule.required().max(160),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "featured",
      title: "Uitlichten op de startpagina",
      type: "boolean",
      group: "display",
      initialValue: false,
    }),
    defineField({
      name: "year",
      title: "Jaar van uitvoering",
      type: "number",
      group: "display",
      validation: (rule) => rule.integer().min(2000).max(2100),
    }),
    defineField({
      name: "publishedAt",
      title: "Publicatiedatum",
      type: "datetime",
      group: "display",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "coverImage",
      subtitle: "category",
    },
  },
  orderings: [
    {
      title: "Nieuwste eerst",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
    {
      title: "Titel A–Z",
      name: "titleAsc",
      by: [{ field: "title", direction: "asc" }],
    },
  ],
});
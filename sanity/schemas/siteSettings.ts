import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Website-instellingen",
  type: "document",
  groups: [
    { name: "home", title: "Startpagina", default: true },
    { name: "contact", title: "Contact en merk" },
  ],
  fields: [
    defineField({ name: "heroEyebrow", title: "Kleine titel bovenaan", type: "string", group: "home" }),
    defineField({ name: "heroTitle", title: "Hoofdtitel regel 1", type: "string", group: "home" }),
    defineField({ name: "heroTitleAccent", title: "Hoofdtitel regel 2 (accent)", type: "string", group: "home" }),
    defineField({ name: "heroIntro", title: "Introductietekst", type: "text", rows: 3, group: "home" }),
    defineField({ name: "heroPrimaryCta", title: "Knoptekst primair", type: "string", group: "home" }),
    defineField({ name: "heroSecondaryCta", title: "Knoptekst secundair", type: "string", group: "home" }),
    defineField({ name: "servicesEyebrow", title: "Diensten – kleine titel", type: "string", group: "home" }),
    defineField({ name: "servicesTitle", title: "Diensten – hoofdtitel", type: "string", group: "home" }),
    defineField({ name: "servicesTitleAccent", title: "Diensten – accenttitel", type: "string", group: "home" }),
    defineField({ name: "servicesIntro", title: "Diensten – intro", type: "text", rows: 3, group: "home" }),
    defineField({ name: "projectsEyebrow", title: "Realisaties – kleine titel", type: "string", group: "home" }),
    defineField({ name: "projectsTitle", title: "Realisaties – hoofdtitel", type: "string", group: "home" }),
    defineField({ name: "contactEyebrow", title: "Contactblok – kleine titel", type: "string", group: "home" }),
    defineField({ name: "contactTitle", title: "Contactblok – hoofdtitel", type: "string", group: "home" }),
    defineField({ name: "contactCta", title: "Contactblok – knoptekst", type: "string", group: "home" }),
    defineField({ name: "slogan", title: "Slogan", type: "string", group: "contact" }),
    defineField({ name: "phoneDisplay", title: "Telefoonnummer (weergave)", type: "string", group: "contact" }),
    defineField({ name: "phoneHref", title: "Telefoonnummer (tel-link, internationaal)", type: "string", group: "contact" }),
  ],
  preview: { prepare: () => ({ title: "Website-instellingen", subtitle: "Startpagina, merk en contact" }) },
});

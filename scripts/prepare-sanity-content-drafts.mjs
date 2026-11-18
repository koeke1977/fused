import { createClient } from "@sanity/client";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || "ulj7mtyd";
const dataset = process.env.SANITY_STUDIO_DATASET || "production";
const token = process.env.SANITY_API_TOKEN;

if (!token) {
  throw new Error("SANITY_API_TOKEN ontbreekt. Gebruik een Sanity-token met write-toegang; zet het token nooit in Git of chat.");
}

const client = createClient({ projectId, dataset, apiVersion: "2026-11-18", token, useCdn: false });

const services = [
  {
    _id: "drafts.service-elektriciteitswerken", _type: "service",
    title: "Elektriciteitswerken", slug: { _type: "slug", current: "elektriciteitswerken" },
    summary: "Een veilige en doordachte elektrische installatie, van bekabeling tot verdeelkast.",
    detailsTitle: "Ook voor bestaande installaties",
    details: [
      "Elektrische installaties aanpassen en conform maken volgens het AREI.",
      "Elektrische schema's opmaken of bestaande schema's actualiseren.",
      "Installaties voorbereiden op een officiële elektrische keuring.",
    ],
    sortOrder: 1, isVisible: true,
  },
  {
    _id: "drafts.service-domotica", _type: "service",
    title: "Domotica / Smart Home", slug: { _type: "slug", current: "domotica" },
    summary: "Meer comfort en controle met slimme technologie in huis.", sortOrder: 2, isVisible: true,
  },
  {
    _id: "drafts.service-verlichting", _type: "service",
    title: "Verlichting", slug: { _type: "slug", current: "verlichting" },
    summary: "Functionele en sfeervolle verlichting, afgestemd op elke ruimte.", sortOrder: 3, isVisible: true,
  },
  {
    _id: "drafts.service-industriele-installaties", _type: "service",
    title: "Industriële installaties", slug: { _type: "slug", current: "industriele-installaties" },
    summary: "Elektrische oplossingen voor technische en professionele omgevingen.", sortOrder: 4, isVisible: true,
  },
];

const settings = {
  _id: "drafts.website-instellingen", _type: "siteSettings",
  heroEyebrow: "SWITCH ON QUALITY", heroTitle: "Powerful techniek.",
  heroTitleAccent: "Perfect afgewerkt.",
  heroIntro: "Elektriciteit, slimme technologie en verlichting. Fused brengt alles samen in één doordachte installatie.",
  heroPrimaryCta: "Bespreek je project", heroSecondaryCta: "Bekijk realisaties",
  heroBottomLine: "Techniek waarop je kan vertrouwen",
  servicesEyebrow: "WAT WE DOEN", servicesTitle: "Alles begint met",
  servicesTitleAccent: "de juiste connectie.",
  servicesIntro: "Van een betrouwbare elektrische basis tot slimme oplossingen die je dagelijks leven makkelijker maken.",
  projectsEyebrow: "ONS WERK", projectsTitle: "Gerealiseerd door Fused.",
  contactEyebrow: "KLAAR OM TE STARTEN?", contactTitle: "Jouw plannen. Onze expertise.",
  contactCta: "Vertel ons erover", slogan: "Switch on Quality",
  email: "info@fused.be", phoneDisplay: "+32 478 96 27 03", phoneHref: "+32478962703",
};

console.log("Voorbereiden van 4 dienstconcepten en 1 concept met website-instellingen...");
for (const service of services) {
  await client.createOrReplace(service);
  console.log(`Concept bijgewerkt: ${service.title}`);
}
await client.createOrReplace(settings);
console.log("Concept bijgewerkt: Website-instellingen");
console.log("Klaar. Alle documenten zijn als CONCEPT aangemaakt; er is niets gepubliceerd.");
